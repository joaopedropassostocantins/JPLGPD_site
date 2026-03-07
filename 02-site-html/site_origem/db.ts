import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, proposals, InsertProposal, Proposal, insurancePayments, InsertInsurancePayment, InsurancePayment, siteSettings, SiteSetting } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ PROPOSAL QUERIES ============

export async function createProposal(data: InsertProposal): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(proposals).values(data);
  return Number(result[0].insertId);
}

export async function getProposalById(id: number): Promise<Proposal | undefined> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(proposals).where(eq(proposals.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateProposal(id: number, data: Partial<InsertProposal>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(proposals).set(data).where(eq(proposals.id, id));
}

// ============ INSURANCE QUERIES ============

export async function createInsurancePayment(data: InsertInsurancePayment): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(insurancePayments).values(data);
  return Number(result[0].insertId);
}

export async function getInsuranceByProposalId(proposalId: number): Promise<InsurancePayment | undefined> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(insurancePayments).where(eq(insurancePayments.proposalId, proposalId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateInsurancePayment(id: number, data: Partial<InsertInsurancePayment>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(insurancePayments).set(data).where(eq(insurancePayments.id, id));
}

export async function getInsuranceByMpPaymentId(mpPaymentId: number): Promise<InsurancePayment | undefined> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(insurancePayments).where(eq(insurancePayments.mpPaymentId, String(mpPaymentId))).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ============ SITE SETTINGS QUERIES ============

export async function getAllSettings(): Promise<SiteSetting[]> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return db.select().from(siteSettings);
}

export async function getSettingByKey(key: string): Promise<string | null> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.select().from(siteSettings).where(eq(siteSettings.settingKey, key)).limit(1);
  return result.length > 0 ? result[0].settingValue : null;
}

export async function getPixSettings(): Promise<{
  pixKey: string;
  pixKeyType: string;
  beneficiaryName: string;
  beneficiaryCity: string;
  insuranceAmount: string;
  insuranceDescription: string;
  insurancePercentage: string;
}> {
  const settings = await getAllSettings();
  const map = new Map(settings.map(s => [s.settingKey, s.settingValue]));

  return {
    pixKey: map.get("pix_key") || "97943878191",
    pixKeyType: map.get("pix_key_type") || "cpf",
    beneficiaryName: map.get("pix_beneficiary_name") || "ENCARREGADO DE DADOS",
    beneficiaryCity: map.get("pix_beneficiary_city") || "SAO PAULO",
    insuranceAmount: map.get("insurance_amount") || "19.00",
    insuranceDescription: map.get("insurance_description") || "Seguro Credito Social",
    insurancePercentage: map.get("insurance_percentage") || "0.89",
  };
}

/**
 * Calculate insurance amount based on percentage of loan amount
 * Returns the calculated amount as a string with 2 decimal places
 * Minimum R$ 9.90, maximum R$ 89.00
 */
export function calculateInsuranceAmount(loanAmount: number, percentage: string): string {
  const pct = parseFloat(percentage) / 100;
  let amount = loanAmount * pct;
  amount = Math.max(9.90, Math.min(89.00, amount));
  return amount.toFixed(2);
}

export async function upsertSetting(key: string, value: string, label?: string, description?: string): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(siteSettings).values({
    settingKey: key,
    settingValue: value,
    label: label || null,
    description: description || null,
  }).onDuplicateKeyUpdate({
    set: { settingValue: value },
  });
}

export async function getAllInsurancePayments(filters?: {
  status?: string;
  limit?: number;
  offset?: number;
}): Promise<Array<InsurancePayment & { proposal?: Proposal }>> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  let query: any = db.select().from(insurancePayments);

  if (filters?.status) {
    query = query.where(eq(insurancePayments.status, filters.status as any));
  }

  query = query.orderBy(desc(insurancePayments.createdAt));

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }
  if (filters?.offset) {
    query = query.offset(filters.offset);
  }

  const results: InsurancePayment[] = await query;
  
  // Join with proposals to get full details
  const enriched = await Promise.all(
    results.map(async (insurance: InsurancePayment) => {
      const proposal = await getProposalById(insurance.proposalId);
      return { ...insurance, proposal };
    })
  );

  return enriched;
}

export async function getInsurancePaymentStats(): Promise<{
  totalPaid: number;
  totalPending: number;
  totalAmount: string;
  paidAmount: string;
}> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const allInsurance = await db.select().from(insurancePayments);
  
  const totalPaid = allInsurance.filter(i => i.status === "PAID").length;
  const totalPending = allInsurance.filter(i => i.status === "PENDING").length;
  
  const paidAmount = allInsurance
    .filter(i => i.status === "PAID")
    .reduce((sum, i) => sum + parseFloat(i.amount?.toString() || "0"), 0)
    .toFixed(2);

  const totalAmount = allInsurance
    .reduce((sum, i) => sum + parseFloat(i.amount?.toString() || "0"), 0)
    .toFixed(2);

  return {
    totalPaid,
    totalPending,
    totalAmount,
    paidAmount,
  };
}
