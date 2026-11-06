import type { AnimalReport } from "@/types";
import { initialReports } from "@/data/reports";

const STORAGE_KEY = "pawrescue-reports-v1";

export function getReports(): AnimalReport[] {
  if (typeof window === "undefined") return initialReports;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialReports;
    const parsed: unknown = JSON.parse(saved);
    return Array.isArray(parsed) ? (parsed as AnimalReport[]) : initialReports;
  } catch {
    return initialReports;
  }
}

export function saveReports(reports: AnimalReport[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch {
    // Storage can be unavailable or full; the current page still shows the report.
  }
}

export function addReport(report: AnimalReport): AnimalReport[] {
  const reports = getReports();
  const updated = [report, ...reports];
  saveReports(updated);
  return updated;
}
