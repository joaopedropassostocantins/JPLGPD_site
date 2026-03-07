import { eq, desc, sql, like, and, count, sum, SQL } from "drizzle-orm";
import { proposals, insurancePayments } from "../drizzle/schema";
import { getDb } from "./db";

export type ProposalWithInsurance = {
  id: number;
  amount: string;
  term: number;
  monthlyRate: string | null;
  cetAnnual: string | null;
  installment: string | null;
  fullName: string | null;
  phone: string | null;
  email: string | null;
  cpf: string | null;
  birthDate: string | null;
  cep: string | null;
  street: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  incomeRange: string | null;
  occupation: string | null;
  loanPurpose: string | null;
  status: string;
  currentStep: number | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  createdAt: Date;
  updatedAt: Date;
  insuranceStatus: string | null;
  insuranceOptIn: number | null;
  insuranceTxid: string | null;
  stripeSessionId: string | null;
};

export type AdminFilters = {
  status?: string;
  search?: string;
  page?: number;
  pageSize?: number;
};

export async function listProposalsAdmin(filters: AdminFilters) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const page = filters.page || 1;
  const pageSize = filters.pageSize || 20;
  const offset = (page - 1) * pageSize;

  const conditions: SQL[] = [];

  if (filters.status && filters.status !== "all") {
    conditions.push(eq(proposals.status, filters.status as any));
  }

  if (filters.search) {
    const searchTerm = `%${filters.search}%`;
    conditions.push(
      sql`(${proposals.fullName} LIKE ${searchTerm} OR ${proposals.cpf} LIKE ${searchTerm} OR ${proposals.email} LIKE ${searchTerm} OR ${proposals.phone} LIKE ${searchTerm})`
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Get total count
  const countResult = await db
    .select({ total: count() })
    .from(proposals)
    .where(whereClause);

  const total = countResult[0]?.total || 0;

  // Get proposals with left join on insurance
  const rows = await db
    .select({
      id: proposals.id,
      amount: proposals.amount,
      term: proposals.term,
      monthlyRate: proposals.monthlyRate,
      cetAnnual: proposals.cetAnnual,
      installment: proposals.installment,
      fullName: proposals.fullName,
      phone: proposals.phone,
      email: proposals.email,
      cpf: proposals.cpf,
      birthDate: proposals.birthDate,
      cep: proposals.cep,
      street: proposals.street,
      number: proposals.number,
      complement: proposals.complement,
      neighborhood: proposals.neighborhood,
      city: proposals.city,
      state: proposals.state,
      incomeRange: proposals.incomeRange,
      occupation: proposals.occupation,
      loanPurpose: proposals.loanPurpose,
      status: proposals.status,
      currentStep: proposals.currentStep,
      utmSource: proposals.utmSource,
      utmMedium: proposals.utmMedium,
      utmCampaign: proposals.utmCampaign,
      createdAt: proposals.createdAt,
      updatedAt: proposals.updatedAt,
      insuranceStatus: insurancePayments.status,
      insuranceOptIn: insurancePayments.optIn,
      insuranceTxid: insurancePayments.txid,
      stripeSessionId: insurancePayments.stripeSessionId,
    })
    .from(proposals)
    .leftJoin(insurancePayments, eq(proposals.id, insurancePayments.proposalId))
    .where(whereClause)
    .orderBy(desc(proposals.createdAt))
    .limit(pageSize)
    .offset(offset);

  return {
    proposals: rows as ProposalWithInsurance[],
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export type DashboardStats = {
  totalProposals: number;
  submittedProposals: number;
  approvedProposals: number;
  rejectedProposals: number;
  analyzingProposals: number;
  draftProposals: number;
  totalRequestedAmount: number;
  avgRequestedAmount: number;
  totalInsurancePaid: number;
  totalInsurancePending: number;
  insuranceRevenue: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Proposal stats
  const proposalStats = await db
    .select({
      total: count(),
      totalAmount: sum(proposals.amount),
    })
    .from(proposals);

  const statusCounts = await db
    .select({
      status: proposals.status,
      count: count(),
    })
    .from(proposals)
    .groupBy(proposals.status);

  const statusMap: Record<string, number> = {};
  for (const row of statusCounts) {
    statusMap[row.status] = row.count;
  }

  // Insurance stats
  const insuranceStats = await db
    .select({
      status: insurancePayments.status,
      count: count(),
      totalAmount: sum(insurancePayments.amount),
    })
    .from(insurancePayments)
    .groupBy(insurancePayments.status);

  const insuranceMap: Record<string, { count: number; amount: number }> = {};
  for (const row of insuranceStats) {
    insuranceMap[row.status] = {
      count: row.count,
      amount: parseFloat(row.totalAmount || "0"),
    };
  }

  const totalProposals = proposalStats[0]?.total || 0;
  const totalAmount = parseFloat(proposalStats[0]?.totalAmount || "0");

  return {
    totalProposals,
    submittedProposals: statusMap["submitted"] || 0,
    approvedProposals: statusMap["approved"] || 0,
    rejectedProposals: statusMap["rejected"] || 0,
    analyzingProposals: statusMap["analyzing"] || 0,
    draftProposals: statusMap["draft"] || 0,
    totalRequestedAmount: totalAmount,
    avgRequestedAmount: totalProposals > 0 ? totalAmount / totalProposals : 0,
    totalInsurancePaid: insuranceMap["PAID"]?.count || 0,
    totalInsurancePending: insuranceMap["PENDING"]?.count || 0,
    insuranceRevenue: insuranceMap["PAID"]?.amount || 0,
  };
}

export async function exportProposalsCSV(): Promise<string> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const rows = await db
    .select({
      id: proposals.id,
      fullName: proposals.fullName,
      email: proposals.email,
      phone: proposals.phone,
      cpf: proposals.cpf,
      amount: proposals.amount,
      term: proposals.term,
      installment: proposals.installment,
      monthlyRate: proposals.monthlyRate,
      cetAnnual: proposals.cetAnnual,
      status: proposals.status,
      incomeRange: proposals.incomeRange,
      occupation: proposals.occupation,
      loanPurpose: proposals.loanPurpose,
      city: proposals.city,
      state: proposals.state,
      utmSource: proposals.utmSource,
      utmMedium: proposals.utmMedium,
      utmCampaign: proposals.utmCampaign,
      createdAt: proposals.createdAt,
      insuranceStatus: insurancePayments.status,
    })
    .from(proposals)
    .leftJoin(insurancePayments, eq(proposals.id, insurancePayments.proposalId))
    .orderBy(desc(proposals.createdAt));

  const headers = [
    "ID", "Nome", "Email", "Telefone", "CPF", "Valor", "Prazo", "Parcela",
    "Taxa Mensal", "CET Anual", "Status", "Faixa Renda", "Ocupação",
    "Finalidade", "Cidade", "UF", "UTM Source", "UTM Medium", "UTM Campaign",
    "Data Criação", "Seguro",
  ];

  const csvRows = [headers.join(",")];

  for (const row of rows) {
    const values = [
      row.id,
      `"${(row.fullName || "").replace(/"/g, '""')}"`,
      `"${(row.email || "").replace(/"/g, '""')}"`,
      `"${(row.phone || "").replace(/"/g, '""')}"`,
      `"${(row.cpf || "").replace(/"/g, '""')}"`,
      row.amount,
      row.term,
      row.installment,
      row.monthlyRate,
      row.cetAnnual,
      row.status,
      `"${(row.incomeRange || "").replace(/"/g, '""')}"`,
      `"${(row.occupation || "").replace(/"/g, '""')}"`,
      `"${(row.loanPurpose || "").replace(/"/g, '""')}"`,
      `"${(row.city || "").replace(/"/g, '""')}"`,
      row.state,
      row.utmSource,
      row.utmMedium,
      row.utmCampaign,
      row.createdAt?.toISOString(),
      row.insuranceStatus || "N/A",
    ];
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}
