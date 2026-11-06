"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import type { AnimalReport, AnimalType } from "@/types";
import { getReports } from "@/lib/reports";
import ReportCard from "@/components/ReportCard";

type Filter = "All" | AnimalType;
export default function ReportFeed() {
  const [reports, setReports] = useState<AnimalReport[]>([]);
  const [filter, setFilter] = useState<Filter>("All");

  useEffect(() => {
    setReports(getReports());
    const onStorage = () => setReports(getReports());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const filtered = useMemo(() => filter === "All" ? reports : reports.filter((r) => r.animal === filter), [reports, filter]);

  return (
    <div>
      <div className="feed-toolbar">
        <div className="filter-label"><SlidersHorizontal size={16} /> Filter reports</div>
        <div className="filter-pills" role="group" aria-label="Filter reports by animal">
          {(["All", "Cat", "Dog", "Other"] as Filter[]).map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`filter-pill ${filter === item ? "filter-selected" : ""}`}>{item}</button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="reports-grid">{filtered.slice(0, 6).map((report) => <ReportCard key={report.id} report={report} />)}</div>
      ) : (
        <div className="empty-state"><span>🐾</span><h3>No reports in this category yet</h3><p>Be the first to share an animal that needs a helping hand.</p><Link href="/report" className="text-link">Create a report <ArrowRight size={15} /></Link></div>
      )}
    </div>
  );
}
