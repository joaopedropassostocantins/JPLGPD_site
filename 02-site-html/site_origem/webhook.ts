/**
 * Stripe Webhook handler
 * Route: POST /api/stripe/webhook
 * Must use express.raw() for signature verification
 */
import type { Express, Request, Response } from "express";
import express from "express";
import Stripe from "stripe";
import { getStripe } from "./stripe";
import { getInsuranceByProposalId, updateInsurancePayment } from "../db";
import { notifyOwner } from "../_core/notification";

export function registerStripeWebhook(app: Express) {
  // IMPORTANT: raw body parser MUST be registered before json parser for this route
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req: Request, res: Response) => {
      const sig = req.headers["stripe-signature"];
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

      if (!sig || !webhookSecret) {
        console.warn("[Stripe Webhook] Missing signature or webhook secret");
        return res.status(400).json({ error: "Missing signature or webhook secret" });
      }

      let event: Stripe.Event;

      try {
        const stripe = getStripe();
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
      } catch (err: any) {
        console.error("[Stripe Webhook] Signature verification failed:", err.message);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
      }

      console.log(`[Stripe Webhook] Received event: ${event.type} (${event.id})`);

      // Handle test events for webhook verification
      if (event.id.startsWith("evt_test_")) {
        console.log("[Stripe Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      try {
        switch (event.type) {
          case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            await handleCheckoutCompleted(session);
            break;
          }
          case "payment_intent.succeeded": {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
            console.log(`[Stripe Webhook] PaymentIntent succeeded: ${paymentIntent.id}`);
            break;
          }
          default:
            console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
        }
      } catch (err: any) {
        console.error(`[Stripe Webhook] Error processing event ${event.type}:`, err.message);
        // Still return 200 to prevent Stripe from retrying
      }

      return res.json({ received: true });
    }
  );
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const proposalId = session.metadata?.proposal_id;
  const paymentType = session.metadata?.payment_type;

  console.log(`[Stripe Webhook] Checkout completed: session=${session.id}, proposal=${proposalId}, type=${paymentType}`);

  if (!proposalId || paymentType !== "insurance") {
    console.warn("[Stripe Webhook] Missing proposal_id or invalid payment_type in metadata");
    return;
  }

  const numericProposalId = parseInt(proposalId, 10);
  if (isNaN(numericProposalId)) {
    console.warn("[Stripe Webhook] Invalid proposal_id:", proposalId);
    return;
  }

  // Update insurance payment status
  const insurance = await getInsuranceByProposalId(numericProposalId);
  if (!insurance) {
    console.warn(`[Stripe Webhook] No insurance record found for proposal ${numericProposalId}`);
    return;
  }

  await updateInsurancePayment(insurance.id, {
    status: "PAID",
  });

  console.log(`[Stripe Webhook] Insurance payment confirmed for proposal ${numericProposalId}`);

  // Notify owner
  try {
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00";
    await notifyOwner({
      title: `Seguro pago via Stripe - Proposta #${numericProposalId}`,
      content: `O seguro da proposta #${numericProposalId} foi pago via Stripe Checkout.\nSession ID: ${session.id}\nValor: R$ ${amount}`,
    });
  } catch (e) {
    console.warn("[Stripe Webhook] Failed to notify owner:", e);
  }
}
