/**
 * Stripe SDK singleton instance
 */
import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY is not configured. Please set it in Settings → Payment.");
    }
    _stripe = new Stripe(secretKey, {
      apiVersion: "2026-01-28.clover",
    });
  }
  return _stripe;
}
