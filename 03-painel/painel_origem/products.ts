/**
 * Stripe product definitions for Empréstimo Social
 * Centralized product/price configuration
 */

export const INSURANCE_PRODUCT = {
  name: "Seguro Proteção Crédito",
  description: "Seguro opcional para proteção do seu empréstimo - cobertura por desemprego involuntário, incapacidade temporária e assistência funeral.",
  amount: 1900, // R$ 19,00 in centavos
  currency: "brl" as const,
  metadata: {
    type: "insurance",
    product_code: "SEG-PROT-001",
  },
};
