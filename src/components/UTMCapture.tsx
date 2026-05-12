"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
];

export function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const stored = sessionStorage.getItem("utm_params");
    if (stored) return; // Already captured — don't overwrite on navigation

    const params: Record<string, string> = {};
    UTM_KEYS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) params[key] = val;
    });

    if (Object.keys(params).length > 0) {
      sessionStorage.setItem("utm_params", JSON.stringify(params));
    }
  }, [searchParams]);

  return null;
}

export function getStoredUTMs(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("utm_params");
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
