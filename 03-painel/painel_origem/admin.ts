import { z } from "zod";
import { adminProcedure, router } from "../_core/trpc";
import { listProposalsAdmin, getDashboardStats, exportProposalsCSV } from "../db-admin";
import { updateProposal, getInsuranceByProposalId, updateInsurancePayment, getAllSettings, upsertSetting, getAllInsurancePayments, getInsurancePaymentStats } from "../db";
import { notifyOwner } from "../_core/notification";

export const adminRouter = router({
  /**
   * Dashboard statistics
   */
  stats: adminProcedure.query(async () => {
    return getDashboardStats();
  }),

  /**
   * List proposals with filters and pagination
   */
  proposals: adminProcedure
    .input(
      z.object({
        status: z.string().optional().default("all"),
        search: z.string().optional().default(""),
        page: z.number().optional().default(1),
        pageSize: z.number().optional().default(20),
      })
    )
    .query(async ({ input }) => {
      return listProposalsAdmin({
        status: input.status,
        search: input.search,
        page: input.page,
        pageSize: input.pageSize,
      });
    }),

  /**
   * Update proposal status
   */
  updateStatus: adminProcedure
    .input(
      z.object({
        proposalId: z.number(),
        status: z.enum(["draft", "submitted", "analyzing", "approved", "rejected"]),
      })
    )
    .mutation(async ({ input }) => {
      await updateProposal(input.proposalId, { status: input.status });
      return { ok: true, proposalId: input.proposalId, status: input.status };
    }),

  /**
   * Confirm insurance payment manually (admin confirms PIX received)
   */
  confirmInsurancePayment: adminProcedure
    .input(
      z.object({
        proposalId: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const insurance = await getInsuranceByProposalId(input.proposalId);
      if (!insurance) {
        throw new Error("Registro de seguro não encontrado para esta proposta.");
      }
      if (insurance.status === "PAID") {
        return { ok: true, message: "Seguro já estava confirmado." };
      }

      await updateInsurancePayment(insurance.id, { status: "PAID" });

      try {
        await notifyOwner({
          title: `Seguro confirmado manualmente - Proposta #${input.proposalId}`,
          content: `O pagamento do seguro da proposta #${input.proposalId} foi confirmado manualmente pelo admin.\nValor: R$ 19,00`,
        });
      } catch (e) {
        console.warn("[Admin] Failed to notify owner:", e);
      }

      return { ok: true, message: "Pagamento do seguro confirmado com sucesso." };
    }),

  /**
   * Get all site settings
   */
  getSettings: adminProcedure.query(async () => {
    const settings = await getAllSettings();
    return settings;
  }),

  /**
   * Update a site setting
   */
  updateSetting: adminProcedure
    .input(
      z.object({
        key: z.string().min(1),
        value: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await upsertSetting(input.key, input.value);
      return { ok: true, key: input.key };
    }),

  /**
   * Batch update multiple settings
   */
  updateSettings: adminProcedure
    .input(
      z.array(
        z.object({
          key: z.string().min(1),
          value: z.string(),
        })
      )
    )
    .mutation(async ({ input }) => {
      for (const setting of input) {
        await upsertSetting(setting.key, setting.value);
      }
      return { ok: true, updated: input.length };
    }),

  /**
   * Export proposals as CSV
   */
  exportCSV: adminProcedure.query(async () => {
    const csv = await exportProposalsCSV();
    return { csv };
  }),

  /**
   * List all insurance payments with filters
   */
  payments: adminProcedure
    .input(
      z.object({
        status: z.enum(["PENDING", "PAID", "EXPIRED"]).optional(),
        limit: z.number().optional().default(50),
        offset: z.number().optional().default(0),
      })
    )
    .query(async ({ input }) => {
      return getAllInsurancePayments({
        status: input.status,
        limit: input.limit,
        offset: input.offset,
      });
    }),

  /**
   * Get payment statistics
   */
  paymentStats: adminProcedure.query(async () => {
    return getInsurancePaymentStats();
  }),
});
