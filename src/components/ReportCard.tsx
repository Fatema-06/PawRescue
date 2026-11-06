import { MapPin, Clock3, Cat, Dog, PawPrint } from "lucide-react";
import type { AnimalReport } from "@/types";

export default function ReportCard({ report }: { report: AnimalReport }) {
  const Icon = report.animal === "Cat" ? Cat : report.animal === "Dog" ? Dog : PawPrint;
  return (
    <article className="report-card">
      <div className="report-image-wrap">
        {/* Remote sample photos are rendered with a regular img for simple demo setup. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={report.image} alt={report.title} className="report-image" />
        <span className={`status-pill status-${report.status.toLowerCase().replaceAll(" ", "-")}`}>{report.status}</span>
      </div>
      <div className="report-content">
        <div className="report-animal"><Icon size={15} /> {report.animal}</div>
        <h3>{report.title}</h3>
        <p>{report.description}</p>
        <div className="report-meta"><span><MapPin size={14} />{report.location}</span><span><Clock3 size={14} />{report.createdAt}</span></div>
      </div>
    </article>
  );
}
