import { useCallback } from "react";

/**
 * GA4-style analytics events via dataLayer
 */
type AnalyticsEvent =
  | "view_landing"
  | "simulate"
  | "view_result"
  | "start_proposal"
  | "step_contact_complete"
  | "step_identification_complete"
  | "step_financial_complete"
  | "submit_proposal"
  | "insurance_view"
  | "insurance_opt_in"
  | "insurance_opt_in_pix"
  | "insurance_opt_in_stripe"
  | "insurance_skipped"
  | "insurance_paid_continue"
  | "pix_generated"
  | "pix_paid_mock";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: AnalyticsEvent, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
    console.log(`[Analytics] ${eventName}`, params);
  }
}

export function useAnalytics() {
  const track = useCallback((eventName: AnalyticsEvent, params?: Record<string, unknown>) => {
    trackEvent(eventName, params);
  }, []);

  return { track };
}
