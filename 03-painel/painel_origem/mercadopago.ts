/**
 * Mercado Pago PIX Integration
 * Uses the official mercadopago SDK v2 to create real PIX payments
 * and check payment status.
 */
import { MercadoPagoConfig, Payment } from "mercadopago";

let _client: MercadoPagoConfig | null = null;
let _payment: Payment | null = null;

function getClient(): MercadoPagoConfig {
  if (!_client) {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error("MERCADOPAGO_ACCESS_TOKEN não configurado. Configure em Settings → Secrets.");
    }
    _client = new MercadoPagoConfig({
      accessToken,
      options: { timeout: 15000 },
    });
  }
  return _client;
}

function getPaymentApi(): Payment {
  if (!_payment) {
    _payment = new Payment(getClient());
  }
  return _payment;
}

export interface PixPaymentResult {
  paymentId: number;
  status: string;
  qrCode: string;       // PIX copia e cola string
  qrCodeBase64: string;  // QR Code image in base64
  expiresAt: string | null;
}

/**
 * Create a PIX payment via Mercado Pago API
 * Returns the payment ID, QR code string, and QR code base64 image
 */
export async function createPixPayment(params: {
  amount: number;
  description: string;
  payerEmail: string;
  payerFirstName: string;
  payerLastName: string;
  payerCpf: string;
  externalReference: string;
}): Promise<PixPaymentResult> {
  const payment = getPaymentApi();

  const body = {
    transaction_amount: params.amount,
    description: params.description,
    payment_method_id: "pix" as const,
    payer: {
      email: params.payerEmail,
      first_name: params.payerFirstName,
      last_name: params.payerLastName,
      identification: {
        type: "CPF",
        number: params.payerCpf.replace(/\D/g, ""),
      },
    },
    external_reference: params.externalReference,
  };

  console.log("[MercadoPago] Creating PIX payment:", {
    amount: params.amount,
    description: params.description,
    externalReference: params.externalReference,
  });

  const response = await payment.create({ body });

  const transactionData = (response as any).point_of_interaction?.transaction_data;

  if (!transactionData?.qr_code || !transactionData?.qr_code_base64) {
    console.error("[MercadoPago] Response missing QR code data:", JSON.stringify(response, null, 2));
    throw new Error("Erro ao gerar PIX. A resposta do Mercado Pago não contém o QR Code.");
  }

  const result: PixPaymentResult = {
    paymentId: response.id!,
    status: response.status || "pending",
    qrCode: transactionData.qr_code,
    qrCodeBase64: transactionData.qr_code_base64,
    expiresAt: transactionData.expiration_date || null,
  };

  console.log("[MercadoPago] PIX payment created:", {
    paymentId: result.paymentId,
    status: result.status,
    hasQrCode: !!result.qrCode,
    hasQrCodeBase64: !!result.qrCodeBase64,
  });

  return result;
}

/**
 * Check payment status via Mercado Pago API
 */
export async function getPaymentStatus(paymentId: number): Promise<{
  id: number;
  status: string;
  statusDetail: string;
}> {
  const payment = getPaymentApi();
  const response = await payment.get({ id: paymentId });

  return {
    id: response.id!,
    status: response.status || "unknown",
    statusDetail: response.status_detail || "unknown",
  };
}

/**
 * Check if Mercado Pago is configured
 */
export function isMercadoPagoConfigured(): boolean {
  return !!process.env.MERCADOPAGO_ACCESS_TOKEN;
}
