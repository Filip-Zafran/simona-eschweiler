import { Locale } from "./types";

export const t = {
  de: {
    nav: [
      ["Startseite", "/"], ["Leistungen", "/leistungen"], ["Traumasensible Begleitung", "/traumasensible-begleitung"],
      ["Über mich", "/ueber-mich"], ["Aktuelles", "/aktuelles"], ["Onlineangebote", "/onlineangebote"], ["Kontakt", "/kontakt"]
    ],
    enquiry: "Betreuung anfragen", learn: "Mehr erfahren", email: "E-Mail schreiben",
  },
  en: {
    nav: [
      ["Home", "/"], ["Services", "/leistungen"], ["Trauma-sensitive support", "/traumasensible-begleitung"],
      ["About me", "/ueber-mich"], ["Updates", "/aktuelles"], ["Online services", "/onlineangebote"], ["Contact", "/kontakt"]
    ],
    enquiry: "Enquire about care", learn: "Learn more", email: "Send an email",
  }
} satisfies Record<Locale, unknown>;
