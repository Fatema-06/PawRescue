import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawRescue — Every paw matters",
  description: "Report street animals in need and find veterinary care around Cairo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Navbar /><main>{children}</main><Footer /></body>
    </html>
  );
}
