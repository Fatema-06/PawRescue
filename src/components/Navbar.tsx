"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, PawPrint, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#reports", label: "Community reports" },
  { href: "/vets", label: "Find a vet" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><PawPrint size={22} fill="currentColor" /></span>
          <span>Paw<span>Rescue</span><small>Every paw matters</small></span>
        </Link>
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={pathname === link.href ? "nav-active" : ""}>{link.label}</Link>
          ))}
          <Link href="/report" className="button button-small nav-cta" onClick={() => setOpen(false)}>
            <Heart size={16} /> Report an animal
          </Link>
        </nav>
        <button className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
