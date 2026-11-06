import { ArrowUpRight, Clock3, MapPin, Phone, Stethoscope } from "lucide-react";
import type { Vet } from "@/types";

export default function VetCard({ vet }: { vet: Vet }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vet.mapsQuery)}`;
  return (
    <article className="vet-card">
      <div className="vet-icon"><Stethoscope size={23} /></div>
      <div className="vet-main">
        <div className="vet-topline"><span className="vet-area">{vet.area}</span><span className="vet-demo">Demo listing</span></div>
        <h3>{vet.name}</h3><p className="vet-note">{vet.note}</p>
        <div className="vet-details"><span><MapPin size={15} />{vet.address}</span><span><Clock3 size={15} />{vet.hours}</span></div>
        <div className="vet-actions">
          <a href={`tel:${vet.phone.replaceAll(" ", "")}`} className="button button-small"><Phone size={15} /> Call clinic</a>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="text-link">Directions <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </article>
  );
}
