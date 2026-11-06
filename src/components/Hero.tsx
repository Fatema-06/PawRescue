"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import AnimalIllustration from "@/components/AnimalIllustration";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="hero-kicker"><span className="kicker-dot" /> A kinder Cairo starts with us</div>
          <h1>They can’t ask for help.<br /><em>But you can.</em></h1>
          <p className="hero-description">See a street animal in need? Share what you saw, help others find them, and connect with local veterinary care.</p>
          <div className="hero-actions">
            <Link href="/report" className="button">Report an animal <ArrowRight size={17} /></Link>
            <Link href="/vets" className="button button-outline"><MapPin size={17} /> Find nearby vets</Link>
          </div>
          <div className="hero-trust"><ShieldCheck size={17} /><span>Every report can be the first step toward help.</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
          <AnimalIllustration />
        </motion.div>
      </div>
      <div className="hero-bottom container"><span>NOTICE</span><span>·</span><span>REPORT</span><span>·</span><span>CARE</span><PawPrintMini /></div>
    </section>
  );
}

function PawPrintMini() {
  return <span className="tiny-paws" aria-hidden="true">🐾</span>;
}
