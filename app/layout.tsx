import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpdateBanner from "@/components/UpdateBanner";
import { getAnnouncements } from "@/lib/announcements";

export const metadata: Metadata = {
  title: { default: "Simone Eschweiler – Hebamme in Berlin", template: "%s | Simone Eschweiler" },
  description: "Hebammenbegleitung in Berlin für Schwangerschaft, Wochenbett und besondere Lebensphasen. Fachlich kompetent, persönlich und traumasensibel.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const announcements = await getAnnouncements();
  return <html lang="de"><body><LanguageProvider><Header /><UpdateBanner announcement={announcements[0]} />{children}<Footer /></LanguageProvider></body></html>;
}
