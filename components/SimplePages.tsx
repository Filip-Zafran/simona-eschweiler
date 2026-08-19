"use client";import Image from "next/image";import {useLanguage} from "./LanguageProvider";import PageHero from "./PageHero";import {siteConfig} from "@/lib/config";

const imprintContent = {
  de: {
    intro:
      "Die rechtlich erforderlichen Angaben für die Website von Simone Eschweiler finden Sie hier in kompakter Form.",
    contactTitle: "Kontakt & Erreichbarkeit",
    contactText:
      "Für Terminvereinbarungen oder allgemeine Fragen erreichen Sie mich telefonisch oder per E-Mail zu den angegebenen Zeiten. In dringenden medizinischen Fällen wenden Sie sich bitte direkt an den Rettungsdienst, ein Krankenhaus oder Ihre behandelnde Ärztin bzw. Ihren behandelnden Arzt.",
    heading: "Impressum",
    subtitle: "Angaben gemäß § 5 TMG",
    address: ["Simone Eschweiler", "Togo-Straße 4", "13351 Berlin"],
    phone: "Telefon: 0173 4004408",
    email: `E-Mail: ${siteConfig.email}`,
    web: "Web: www.hebamme-se.de",
    ik: "Institutionskennzeichen (IK): 4531011666",
    vat: "Umsatzsteuerbefreiung gemäß § 4 Nr. 14 UStG",
    member: "Mitglied im Deutschen Hebammenverband e.V.",
    authority: "Zuständige Aufsichtsbehörde: Landesamt für Gesundheit und Soziales Berlin",
    profession: "Berufsbezeichnung: Hebamme",
    profession2: "Verliehen in Deutschland",
    reg: "Berufsrechtliche Regelungen: www.hebammengesetz.de",
    copyrightTitle: "Urheberrecht",
    copyrightText:
      "Die auf dieser Website veröffentlichten Inhalte und Bilder unterliegen dem deutschen Urheberrecht. Eine Verwendung außerhalb der gesetzlichen Grenzen bedarf der schriftlichen Zustimmung der jeweiligen Urheberin. Downloads und Kopien dieser Website sind ausschließlich für den privaten und nicht kommerziellen Gebrauch gestattet.",
  },
  en: {
    intro:
      "The legally required information for Simone Eschweiler’s website is listed here in a clear and accessible format.",
    contactTitle: "Contact & availability",
    contactText:
      "For appointment requests or general questions, you can reach me by telephone or email during the stated hours. In urgent medical situations, please contact the emergency service, a hospital, or your treating physician directly.",
    heading: "Legal notice",
    subtitle: "Information in accordance with § 5 TMG",
    address: ["Simone Eschweiler", "Togo-Straße 4", "13351 Berlin"],
    phone: "Phone: +49 173 4004408",
    email: `Email: ${siteConfig.email}`,
    web: "Web: www.hebamme-se.de",
    ik: "Institutional registration number (IK): 4531011666",
    vat: "Exempt from VAT pursuant to § 4 no. 14 UStG",
    member: "Member of the German Midwives Association (Deutscher Hebammenverband e.V.)",
    authority: "Supervisory authority: State Office for Health and Social Affairs Berlin",
    profession: "Professional title: Midwife",
    profession2: "Awarded in Germany",
    reg: "Professional regulations: www.hebammengesetz.de",
    copyrightTitle: "Copyright",
    copyrightText:
      "The content and images published on this website are protected by German copyright law. Any use beyond the statutory limits requires the written consent of the respective author. Downloads and copies of this website are permitted only for private, non-commercial use.",
  },
};

const privacyContent = {
  de: {
    heading: "Datenschutz",
    intro:
      "Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Daten, die im Rahmen einer Kontaktaufnahme übermittelt werden, werden ausschließlich gemäß den gesetzlichen Datenschutzbestimmungen verarbeitet.",
    text1:
      "Eine Weitergabe an Dritte erfolgt nicht ohne ausdrückliche Zustimmung. Es wird darauf hingewiesen, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.",
    text2:
      "Bitte beachten Sie, dass eine absolut sichere Kommunikation im Internet technisch nicht vollständig gewährleistet werden kann. Wenn Sie vertrauliche Informationen senden möchten, nutzen Sie bitte alternative sichere Kommunikationswege.",
  },
  en: {
    heading: "Privacy policy",
    intro:
      "The use of this website is generally possible without providing personal data. Data transmitted during contact requests is processed only in accordance with applicable data protection regulations.",
    text1:
      "Personal data is not passed on to third parties without explicit consent. Please note that data transmission over the internet may contain security vulnerabilities.",
    text2:
      "Please be aware that complete security of communication over the internet cannot be guaranteed technically. If you need to send confidential information, please use alternative secure communication methods.",
  },
};

export function OnlinePage(){const{locale}=useLanguage();return <main><PageHero eyebrow={locale==="de"?"Onlineangebote":"Online services"} title={locale==="de"?"Ergänzende Begleitung & Onlineangebote":"Additional support & online services"} text={locale==="de"?"Ein ergänzendes Angebot mit Fokus auf ganzheitliche, traumasensible und neurosystemische Begleitung.":"Additional services focused on holistic, trauma-sensitive and neuro-systemic support."}/><section className="section online"><div className="container split"><div><h2>{locale==="de"?"Begleitung, unabhängig vom Ort":"Support, wherever you are"}</h2><p>{locale==="de"?"Neben meiner Hebammentätigkeit entsteht ein ergänzendes Onlineangebot. Dieses Angebot ist unabhängig von den Leistungen der Hebammenversorgung und wird gesondert vergütet.":"Alongside my midwifery work, I am developing additional online services. These are separate from statutory midwifery care and are charged independently."}</p><a className="button" href={siteConfig.meloneGrooveUrl} target="_blank" rel="noreferrer">Melone Groove ↗</a></div><Image className="split-image" src="/images/detail2.jpeg" width={1600} height={1066} alt="Sei guter Hoffnung"/></div></section></main>}

export function ContactPage(){const{locale}=useLanguage();const copy = locale === "de" ? {
  eyebrow: "Kontakt",
  title: "Ich freue mich auf Ihre Anfrage.",
  text: "Für Betreuungsanfragen und weitere Informationen kontaktieren Sie mich gerne per E-Mail oder telefonisch.",
  phoneLabel: "Telefon",
  emailLabel: "E-Mail",
  phone: "0173 4004408",
  email: siteConfig.email,
  button: "E-Mail schreiben",
} : {
  eyebrow: "Contact",
  title: "I look forward to hearing from you.",
  text: "For care enquiries and further information, please contact me by email or telephone.",
  phoneLabel: "Phone",
  emailLabel: "Email",
  phone: "+49 173 4004408",
  email: siteConfig.email,
  button: "Send an email",
};

return <main><PageHero eyebrow={copy.eyebrow} title={copy.title} text={copy.text}/><section className="section contact"><div className="container"><div className="contact-card">
  <div className="contact-card-copy"><span className="eyebrow">{copy.emailLabel}</span><p className="quote"><a href={`mailto:${copy.email}`}>{copy.email}</a></p></div>
  <div className="contact-card-copy"><span className="eyebrow">{copy.phoneLabel}</span><p className="quote"><a href={`tel:${copy.phone.replace(/\s+/g, "")}`}>{copy.phone}</a></p></div>
  <div className="contact-card-actions"><a className="button" href={`mailto:${siteConfig.email}`}>{copy.button} →</a></div>
</div></div></section></main>}

export function LegalPage({type}:{type:"imprint"|"privacy"}){const{locale}=useLanguage();const isImprint=type==="imprint";const imprintCopy=imprintContent[locale];const privacyCopy=privacyContent[locale];
return <main className="legal"><PageHero eyebrow={locale==="de"?"Rechtliches":"Legal"} title={isImprint ? imprintCopy.heading : privacyCopy.heading} text={isImprint ? imprintCopy.intro : privacyCopy.intro}/><section className="section"><div className="container legal-grid">{isImprint ? <>
  <article className="legal-card legal-highlight"><div className="legal-header"><span className="eyebrow">{imprintCopy.contactTitle}</span><h3>{imprintCopy.subtitle}</h3></div><div className="legal-list"><p>{imprintCopy.address[0]}</p><p>{imprintCopy.address[1]}</p><p>{imprintCopy.address[2]}</p><p>{imprintCopy.phone}</p><p>{imprintCopy.email}</p><p>{imprintCopy.web}</p><p>{imprintCopy.ik}</p><p>{imprintCopy.vat}</p><p>{imprintCopy.member}</p><p>{imprintCopy.authority}</p><p>{imprintCopy.profession}</p><p>{imprintCopy.profession2}</p><p>{imprintCopy.reg}</p></div></article>
  <article className="legal-card"><div className="legal-header"><span className="eyebrow">{imprintCopy.copyrightTitle}</span></div><p>{imprintCopy.copyrightText}</p></article>
</> : <>
  <article className="legal-card legal-highlight"><p>{privacyCopy.intro}</p><p>{privacyCopy.text1}</p><p>{privacyCopy.text2}</p></article>
  <article className="legal-card"><div className="legal-header"><span className="eyebrow">{locale==="de"?"Hinweis":"Note"}</span></div><p>{locale==="de"?"Die Nutzung dieser Website erfolgt auf eigene Verantwortung. Bitte beachten Sie, dass eine 100%ige Sicherheit bei der Übertragung persönlicher Daten im Internet nicht gewährleistet werden kann.":"Use of this website is at your own responsibility. Please note that 100% security for personal data transmitted over the internet cannot be guaranteed."}</p></article>
</>}</div></section></main>}
