"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Search, SlidersHorizontal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import VetCard from "@/components/VetCard";
import { vets } from "@/data/vets";

export default function VetsPage() {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("All areas");
  const areas = ["All areas", ...Array.from(new Set(vets.map((vet) => vet.area)))];
  const filtered = useMemo(() => vets.filter((vet) => {
    const matchesArea = area === "All areas" || vet.area === area;
    const term = search.toLowerCase();
    return matchesArea && `${vet.name} ${vet.area} ${vet.address}`.toLowerCase().includes(term);
  }), [area, search]);

  return (
    <section className="vets-page">
      <div className="container">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to home</Link>
        <div className="vets-header">
          <SectionHeading eyebrow="LOCAL SUPPORT · CAIRO" title="Find a helping hand nearby" description="Browse the sample directory to find veterinary clinics by area. Please confirm details and availability before visiting." />
          <div className="vets-header-art">🩺<span>🐾</span></div>
        </div>
        <div className="vet-search-panel">
          <label className="search-box"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search clinic, area, or street..." aria-label="Search clinics" /></label>
          <label className="area-select-label"><SlidersHorizontal size={16} /><span className="visually-hidden">Filter by area</span><select value={area} onChange={(e) => setArea(e.target.value)}>{areas.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="directory-caption"><span><MapPin size={15} /> Cairo & nearby areas</span><span>{filtered.length} {filtered.length === 1 ? "clinic" : "clinics"} shown</span></div>
        {filtered.length ? <div className="vets-grid">{filtered.map((vet) => <VetCard key={vet.id} vet={vet} />)}</div> : (
          <div className="empty-state"><span>🔎</span><h3>No clinics found</h3><p>Try another clinic name or choose a different area.</p><button className="text-link" onClick={() => { setSearch(""); setArea("All areas"); }}>Clear filters</button></div>
        )}
        <div className="directory-disclaimer"><strong>Please note:</strong> These are sample listings created for the PawRescue demo, not verified clinic recommendations. Check the clinic’s real address, phone number and opening hours before travelling.</div>
      </div>
    </section>
  );
}
