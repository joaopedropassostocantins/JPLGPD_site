import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      ip: "127.0.0.1",
    } as any,
    res: {
      clearCookie: () => {},
    } as any,
  };
}

describe("loan.simulate", () => {
  it("returns 3 options for terms [6, 12, 18]", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 3000,
      terms: [6, 12, 18],
    });

    expect(result.options).toHaveLength(3);
    expect(result.amount).toBe(3000);
  });

  it("each option has correct structure", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 5000,
      terms: [12],
    });

    const option = result.options[0];
    expect(option).toHaveProperty("term", 12);
    expect(option).toHaveProperty("monthlyRate");
    expect(option).toHaveProperty("cetAnnual");
    expect(option).toHaveProperty("installment");
    expect(option).toHaveProperty("totalAmount");
    expect(option.monthlyRate).toBeGreaterThan(0);
    expect(option.cetAnnual).toBeGreaterThan(0);
    expect(option.installment).toBeGreaterThan(0);
    expect(option.totalAmount).toBeGreaterThanOrEqual(5000);
  });

  it("installment * term >= amount (total always >= principal)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 1000,
      terms: [6, 12, 18],
    });

    for (const option of result.options) {
      expect(option.installment * option.term).toBeGreaterThanOrEqual(1000);
      expect(option.totalAmount).toBeGreaterThanOrEqual(1000);
    }
  });

  it("rejects amount below minimum (300)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.loan.simulate({ amount: 100, terms: [12] })
    ).rejects.toThrow();
  });

  it("rejects amount above maximum (10000)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.loan.simulate({ amount: 50000, terms: [12] })
    ).rejects.toThrow();
  });

  it("longer terms have higher total amounts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 5000,
      terms: [6, 12, 18],
    });

    const [opt6, opt12, opt18] = result.options;
    expect(opt12.totalAmount).toBeGreaterThan(opt6.totalAmount);
    expect(opt18.totalAmount).toBeGreaterThan(opt12.totalAmount);
  });

  it("shorter terms have higher installments", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 5000,
      terms: [6, 12, 18],
    });

    const [opt6, opt12, opt18] = result.options;
    expect(opt6.installment).toBeGreaterThan(opt12.installment);
    expect(opt12.installment).toBeGreaterThan(opt18.installment);
  });
});

describe("CPF validation (via simulate input)", () => {
  it("accepts valid amount range", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.loan.simulate({
      amount: 300,
      terms: [6],
    });
    expect(result.options).toHaveLength(1);

    const result2 = await caller.loan.simulate({
      amount: 10000,
      terms: [18],
    });
    expect(result2.options).toHaveLength(1);
  });
});
