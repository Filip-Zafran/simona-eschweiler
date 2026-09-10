"use client";
import ArrowIcon from "./ArrowIcon";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Announcement } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";

export default function UpdateBanner({ announcement }: { announcement?: Announcement }) {
  const { locale } = useLanguage();
  const pathname = usePathname();

  if (!announcement || pathname.startsWith("/admin")) return null;

  const title = locale === "en" && announcement.title_en
    ? announcement.title_en
    : announcement.title_de;

  return <aside className={`update-banner ${announcement.important ? "important" : ""}`}>
    <span className="update-banner-label">{locale === "de" ? "Aktuelles" : "Update"}</span>
    <span>{title}</span>
    <Link className="button learn-more-button" href="/aktuelles">{locale === "de" ? "Mehr erfahren" : "Learn more"} <ArrowIcon /></Link>
  </aside>;
}
