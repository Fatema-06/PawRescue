import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, PawPrint, Plus } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ReportFeed from "@/components/ReportFeed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="impact-strip">
        <div className="container impact-grid">
          <div><span className="impact-icon"><PawPrint size={19} /></span><strong>One report</strong><small>can bring attention to an animal in need.</small></div>
          <div><span className="impact-icon"><HeartHandshake size={19} /></span><strong>One community</strong><small>can turn concern into action.</small></div>
          <div><span className="impact-icon"><MapPin size={19} /></span><strong>Local support</strong><small>helps connect animals with care.</small></div>
        </div>
      </section>

      <section className="section section-reports" id="reports">
        <div className="container">
          <div className="section-row">
            <SectionHeading eyebrow="THE COMMUNITY" title="A little help goes a long way" description="See the latest animals shared by people in the community. Every report helps others know where support may be needed." />
            <Link href="/report" className="button button-outline desktop-action"><Plus size={17} /> Add a report</Link>
          </div>
          <ReportFeed />
          <div className="mobile-center"><Link href="/report" className="button button-outline"><Plus size={17} /> Add a report</Link></div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container">
          <SectionHeading eyebrow="HOW PAWRESCUE WORKS" title="Three steps. One kinder world." description="You don't need to be an expert to make a difference. Start with what you see." centered />
          <div className="steps-grid">
            <div className="step-card"><span className="step-number">01</span><div className="step-emoji">👀</div><h3>Spot an animal</h3><p>Notice a street animal that looks injured, unwell, or unsafe.</p></div>
            <div className="step-card"><span className="step-number">02</span><div className="step-emoji">📸</div><h3>Share a report</h3><p>Add a photo, a short description, and the location where you saw them.</p></div>
            <div className="step-card"><span className="step-number">03</span><div className="step-emoji">💚</div><h3>Help find care</h3><p>Let others see the report and explore veterinary support nearby.</p></div>
          </div>
        </div>
      </section>

      <section className="vet-cta-section">
        <div className="container vet-cta">
          <div className="cta-paw"><PawPrint size={34} /></div>
          <div><span className="eyebrow">A LITTLE CLOSER TO HELP</span><h2>Care is closer than you think.</h2><p>Explore our sample Cairo vet directory and find a clinic to contact.</p></div>
          <Link href="/vets" className="button button-light">Explore vets <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
