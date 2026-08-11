import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Simone Eschweiler – Hebamme in Berlin", template: "%s | Simone Eschweiler" },
  description: "Hebammenbegleitung in Berlin für Schwangerschaft, Wochenbett und besondere Lebensphasen. Fachlich kompetent, persönlich und traumasensibel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><LanguageProvider><Header />{children}<Footer /></LanguageProvider></body></html>;
}
