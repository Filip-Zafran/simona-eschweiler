"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/translations";

export default function Header() {
  const { locale, setLocale } = useLanguage(); const [open, setOpen] = useState(false);
  return <header className="header"><nav className="nav container" aria-label="Main navigation">
    <Link className="logo" href="/" aria-label="Simone Eschweiler home"><Image src="/images/signature.jpeg" width={1170} height={765} alt="Simone Eschweiler" priority /></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open menu">{open ? "×" : "☰"}</button>
    <div className={`navlinks ${open ? "open" : ""}`}>
      {t[locale].nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <div className="languages" aria-label="Language"><button className={locale === "de" ? "active" : ""} onClick={() => setLocale("de")}>DE</button><span>|</span><button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>EN</button></div>
    </div>
  </nav></header>;
}
