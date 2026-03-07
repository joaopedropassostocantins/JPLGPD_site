/**
 * Mercado Pago Webhook handler
 * Route: POST /api/mercadopago/webhook
 * Receives IPN (Instant Payment Notification) from Mercado Pago
 * when a PIX payment status changes (e.g., pending → approved)
 */
import type { Express, Request, Response } from "express";
import { getPaymentStatus, isMercadoPagoConfigured } from "./mercadopago";
import { getInsuranceByMpPaymentId, updateInsurancePayment } from "./db";
import { notifyOwner } from "./_core/notification";

export function registerMercadoPagoWebhook(app: Express) {
  app.post("/api/mercadopago/webhook", async (req: Request, res: Response) => {
    try {
      // Mercado Pago sends different notification formats
      // IPN format: { action, data: { id } }
      // Webhook format: { type, data: { id } }
      const body = req.body;

      console.log("[MP Webhook] Received:", JSON.stringify(body));

      // Handle IPN notifications
      if (body?.type === "payment" || body?.action === "payment.updated" || body?.action === "payment.created") {
        const paymentId = body?.data?.id;

        if (!paymentId) {
          console.warn("[MP Webhook] Missing payment ID in notification");
          return res.status(200).json({ received: true });
        }

        if (!isMercadoPagoConfigured()) {
          console.warn("[MP Webhook] Mercado Pago not configured, skipping");
          return res.status(200).json({ received: true });
        }

        // Fetch payment details from Mercado Pago API
        const paymentStatus = await getPaymentStatus(Number(paymentId));

        console.log(`[MP Webhook] Payment ${paymentId} status: ${paymentStatus.status} (${paymentStatus.statusDetail})`);

        if (paymentStatus.status === "approved") {
          // Find insurance record by Mercado Pago payment ID
          const insurance = await getInsuranceByMpPaymentId(Number(paymentId));

          if (insurance) {
            if (insurance.status !== "PAID") {
              await updateInsurancePayment(insurance.id, { status: "PAID" });
              console.log(`[MP Webhook] Insurance ${insurance.id} marked as PAID (proposal ${insurance.proposalId})`);

              // Notify owner
              try {
                await notifyOwner({
                  title: `Seguro pago via PIX - Proposta #${insurance.proposalId}`,
                  content: `O seguro da proposta #${insurance.proposalId} foi pago via PIX (Mercado Pago).\nPayment ID: ${paymentId}\nValor: R$ 19,00`,
                });
              } catch (e) {
                console.warn("[MP Webhook] Failed to notify owner:", e);
              }
            } else {
              console.log(`[MP Webhook] Insurance ${insurance.id} already PAID, skipping`);
            }
          } else {
            console.warn(`[MP Webhook] No insurance record found for MP payment ${paymentId}`);
          }
        }
      }

      // Always return 200 to acknowledge receipt
      return res.status(200).json({ received: true });
    } catch (err: any) {
      console.error("[MP Webhook] Error processing webhook:", err.message);
      // Still return 200 to prevent retries
      return res.status(200).json({ received: true });
    }
  });
}
