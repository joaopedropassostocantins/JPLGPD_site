import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, json, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Proposals table - stores loan proposals from the funnel
 */
export const proposals = mysqlTable("proposals", {
  id: int("id").autoincrement().primaryKey(),
  // Simulation data
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  term: int("term").notNull(),
  monthlyRate: decimal("monthlyRate", { precision: 6, scale: 4 }),
  cetAnnual: decimal("cetAnnual", { precision: 6, scale: 2 }),
  installment: decimal("installment", { precision: 10, scale: 2 }),
  // Step A: Contact
  fullName: varchar("fullName", { length: 255 }),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  whatsappOptIn: int("whatsappOptIn").default(0),
  // Step B: Identification (KYC)
  cpf: varchar("cpf", { length: 14 }),
  birthDate: varchar("birthDate", { length: 10 }),
  cep: varchar("cep", { length: 10 }),
  street: varchar("street", { length: 255 }),
  number: varchar("number", { length: 20 }),
  complement: varchar("complement", { length: 100 }),
  neighborhood: varchar("neighborhood", { length: 100 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 2 }),
  creditCheckConsent: int("creditCheckConsent").default(0),
  // Step C: Financial Profile
  incomeRange: varchar("incomeRange", { length: 50 }),
  occupation: varchar("occupation", { length: 100 }),
  loanPurpose: varchar("loanPurpose", { length: 100 }),
  // Step D: Review
  termsAccepted: int("termsAccepted").default(0),
  truthDeclaration: int("truthDeclaration").default(0),
  // Status
  status: mysqlEnum("status", ["draft", "submitted", "analyzing", "approved", "rejected"]).default("draft").notNull(),
  currentStep: int("currentStep").default(1),
  // UTM tracking
  utmSource: varchar("utmSource", { length: 255 }),
  utmMedium: varchar("utmMedium", { length: 255 }),
  utmCampaign: varchar("utmCampaign", { length: 255 }),
  utmContent: varchar("utmContent", { length: 255 }),
  utmTerm: varchar("utmTerm", { length: 255 }),
  // Honeypot
  honeypot: varchar("honeypot", { length: 255 }),
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Proposal = typeof proposals.$inferSelect;
export type InsertProposal = typeof proposals.$inferInsert;

/**
 * Insurance payments table - stores optional insurance PIX payments
 */
export const insurancePayments = mysqlTable("insurance_payments", {
  id: int("id").autoincrement().primaryKey(),
  proposalId: int("proposalId").notNull(),
  optIn: int("optIn").default(0),
  txid: varchar("txid", { length: 30 }),
  stripeSessionId: varchar("stripeSessionId", { length: 255 }),
  mpPaymentId: varchar("mpPaymentId", { length: 50 }),
  pixPayload: text("pixPayload"),
  amount: decimal("amount", { precision: 10, scale: 2 }).default("19.00"),
  status: mysqlEnum("status", ["PENDING", "PAID", "EXPIRED"]).default("PENDING").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type InsurancePayment = typeof insurancePayments.$inferSelect;
export type InsertInsurancePayment = typeof insurancePayments.$inferInsert;

/**
 * Site settings table - key-value store for dynamic configuration
 */
export const siteSettings = mysqlTable("site_settings", {
  id: int("id").autoincrement().primaryKey(),
  settingKey: varchar("settingKey", { length: 100 }).notNull().unique(),
  settingValue: text("settingValue").notNull(),
  label: varchar("label", { length: 255 }),
  description: text("description"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SiteSetting = typeof siteSettings.$inferSelect;
export type InsertSiteSetting = typeof siteSettings.$inferInsert;
