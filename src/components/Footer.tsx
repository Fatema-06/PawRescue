import Link from "next/link";
import { Heart, PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark"><PawPrint size={21} fill="currentColor" /></span>
          <div><strong>PawRescue</strong><p>Small acts of kindness can change a life.</p></div>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link><Link href="/report">Report an animal</Link><Link href="/vets">Find a vet</Link>
        </div>
        <p className="copyright">Made with <Heart size={13} fill="currentColor" /> for street animals · Cairo, Egypt</p>
      </div>
    </footer>
  );
}
