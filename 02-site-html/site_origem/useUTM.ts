import { useState, useEffect } from "react";
import type { UTMParams } from "@shared/loan-types";

const UTM_STORAGE_KEY = "es_utm_params";

export function useUTM(): UTMParams {
  const [utm, setUtm] = useState<UTMParams>(() => {
    try {
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") || undefined;
    const utmMedium = params.get("utm_medium") || undefined;
    const utmCampaign = params.get("utm_campaign") || undefined;
    const utmContent = params.get("utm_content") || undefined;
    const utmTerm = params.get("utm_term") || undefined;

    if (utmSource || utmMedium || utmCampaign || utmContent || utmTerm) {
      const newUtm: UTMParams = { utmSource, utmMedium, utmCampaign, utmContent, utmTerm };
      setUtm(newUtm);
      try {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(newUtm));
      } catch {
        // ignore storage errors
      }
    }
  }, []);

  return utm;
}
