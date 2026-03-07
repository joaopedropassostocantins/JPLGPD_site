import { describe, expect, it } from "vitest";
import { generatePixPayload, crc16, generateTxid, validateCPF, validatePhone, validateEmail, simulateLoan } from "./pix";

describe("PIX Payload Generator", () => {
  it("generates a non-empty payload string", () => {
    const txid = generateTxid();
    const payload = generatePixPayload(txid);

    expect(payload).toBeTruthy();
    expect(typeof payload).toBe("string");
    expect(payload.length).toBeGreaterThan(50);
  });

  it("starts with 0002 (Payload Format Indicator)", () => {
    const payload = generatePixPayload("TEST123");
    expect(payload.startsWith("0002")).toBe(true);
  });

  it("contains BR.GOV.BCB.PIX GUI", () => {
    const payload = generatePixPayload("TEST123");
    expect(payload).toContain("BR.GOV.BCB.PIX");
  });

  it("contains the default amount 19.00 when no config provided", () => {
    const payload = generatePixPayload("TEST123");
    expect(payload).toContain("19.00");
  });

  it("uses custom insurance amount from config", () => {
    const payload = generatePixPayload("TEST123", { insuranceAmount: "26.70" });
    expect(payload).toContain("26.70");
    expect(payload).not.toContain("19.00");
  });

  it("ends with CRC16 (4 hex chars)", () => {
    const payload = generatePixPayload("TEST123");
    const last4 = payload.slice(-4);
    expect(/^[0-9A-F]{4}$/.test(last4)).toBe(true);
  });

  it("different txids produce different payloads", () => {
    const payload1 = generatePixPayload("TXID001");
    const payload2 = generatePixPayload("TXID002");
    expect(payload1).not.toBe(payload2);
  });
});

describe("CRC16 (CCITT-FALSE)", () => {
  it("computes CRC16 for a known string", () => {
    const crc = crc16("Hello");
    expect(typeof crc).toBe("string");
    expect(crc).toHaveLength(4);
    expect(/^[0-9A-F]{4}$/.test(crc)).toBe(true);
  });

  it("same input always produces same CRC", () => {
    const crc1 = crc16("test123");
    const crc2 = crc16("test123");
    expect(crc1).toBe(crc2);
  });

  it("different inputs produce different CRCs", () => {
    const crc1 = crc16("input1");
    const crc2 = crc16("input2");
    expect(crc1).not.toBe(crc2);
  });
});

describe("TXID Generator", () => {
  it("generates alphanumeric string between 12-20 chars", () => {
    const txid = generateTxid();
    expect(txid.length).toBeGreaterThanOrEqual(12);
    expect(txid.length).toBeLessThanOrEqual(20);
    expect(/^[A-Za-z0-9]+$/.test(txid)).toBe(true);
  });

  it("generates unique txids", () => {
    const txids = new Set(Array.from({ length: 100 }, () => generateTxid()));
    expect(txids.size).toBe(100);
  });
});

describe("CPF Validation", () => {
  it("validates a correct CPF", () => {
    expect(validateCPF("529.982.247-25")).toBe(true);
    expect(validateCPF("52998224725")).toBe(true);
  });

  it("rejects all-same-digit CPFs", () => {
    expect(validateCPF("111.111.111-11")).toBe(false);
    expect(validateCPF("000.000.000-00")).toBe(false);
  });

  it("rejects CPF with wrong check digits", () => {
    expect(validateCPF("529.982.247-26")).toBe(false);
  });

  it("rejects CPF with wrong length", () => {
    expect(validateCPF("123")).toBe(false);
    expect(validateCPF("")).toBe(false);
  });
});

describe("Phone Validation", () => {
  it("validates mobile numbers (11 digits)", () => {
    expect(validatePhone("(11) 99999-9999")).toBe(true);
    expect(validatePhone("11999999999")).toBe(true);
  });

  it("validates landline numbers (10 digits)", () => {
    expect(validatePhone("(11) 3333-3333")).toBe(true);
    expect(validatePhone("1133333333")).toBe(true);
  });

  it("rejects short numbers", () => {
    expect(validatePhone("123")).toBe(false);
  });
});

describe("Email Validation", () => {
  it("validates correct emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("user.name@domain.com.br")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(validateEmail("notanemail")).toBe(false);
    expect(validateEmail("@domain.com")).toBe(false);
    expect(validateEmail("user@")).toBe(false);
  });
});

describe("Loan Simulator", () => {
  it("returns correct number of options", () => {
    const options = simulateLoan(3000, [6, 12, 18]);
    expect(options).toHaveLength(3);
  });

  it("each option has correct structure", () => {
    const options = simulateLoan(5000, [12]);
    const option = options[0];
    expect(option).toHaveProperty("term", 12);
    expect(option).toHaveProperty("monthlyRate");
    expect(option).toHaveProperty("cetAnnual");
    expect(option).toHaveProperty("installment");
    expect(option).toHaveProperty("totalAmount");
    expect(option.monthlyRate).toBeGreaterThan(0);
    expect(option.installment).toBeGreaterThan(0);
    expect(option.totalAmount).toBeGreaterThanOrEqual(5000);
  });

  it("total amount always >= principal", () => {
    const options = simulateLoan(1000, [6, 12, 18]);
    for (const option of options) {
      expect(option.totalAmount).toBeGreaterThanOrEqual(1000);
    }
  });

  it("longer terms have higher total amounts", () => {
    const options = simulateLoan(5000, [6, 12, 18]);
    expect(options[1].totalAmount).toBeGreaterThan(options[0].totalAmount);
    expect(options[2].totalAmount).toBeGreaterThan(options[1].totalAmount);
  });

  it("shorter terms have higher installments", () => {
    const options = simulateLoan(5000, [6, 12, 18]);
    expect(options[0].installment).toBeGreaterThan(options[1].installment);
    expect(options[1].installment).toBeGreaterThan(options[2].installment);
  });

  it("rates are within expected range (2.49% to 5.99%)", () => {
    const options = simulateLoan(3000, [6, 12, 18, 24]);
    for (const option of options) {
      expect(option.monthlyRate).toBeGreaterThanOrEqual(2.49);
      expect(option.monthlyRate).toBeLessThanOrEqual(5.99);
    }
  });
});

// Tests for dynamic insurance calculation
import { calculateInsuranceAmount } from "./db";

describe("Dynamic Insurance Calculation", () => {
  it("calculates 0.89% of R$ 1000 = R$ 8.90 (but min is R$ 9.90)", () => {
    const result = calculateInsuranceAmount(1000, "0.89");
    expect(result).toBe("9.90"); // minimum enforced
  });

  it("calculates 0.89% of R$ 3000 = R$ 26.70", () => {
    const result = calculateInsuranceAmount(3000, "0.89");
    expect(result).toBe("26.70");
  });

  it("calculates 0.89% of R$ 5000 = R$ 44.50", () => {
    const result = calculateInsuranceAmount(5000, "0.89");
    expect(result).toBe("44.50");
  });

  it("calculates 0.89% of R$ 10000 = R$ 89.00", () => {
    const result = calculateInsuranceAmount(10000, "0.89");
    expect(result).toBe("89.00");
  });

  it("enforces minimum of R$ 9.90", () => {
    const result = calculateInsuranceAmount(300, "0.89");
    // 300 * 0.0089 = 2.67, but min is 9.90
    expect(result).toBe("9.90");
  });

  it("enforces maximum of R$ 89.00", () => {
    const result = calculateInsuranceAmount(10000, "1.50");
    // 10000 * 0.015 = 150, but max is 89.00
    expect(result).toBe("89.00");
  });

  it("works with different percentages", () => {
    const result = calculateInsuranceAmount(5000, "1.00");
    // 5000 * 0.01 = 50.00
    expect(result).toBe("50.00");
  });

  it("returns string with 2 decimal places", () => {
    const result = calculateInsuranceAmount(3000, "0.89");
    expect(result).toMatch(/^\d+\.\d{2}$/);
  });
});
