import { appLinks } from "@/types/appLinks";

export const footerApplicationLinks: appLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projects",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Lycée",
    baseUrl:
      "https://www.site.ac-aix-marseille.fr/lyc-mendesfrance-vitrolles/spip/-00-Accueil-.html",
    type: "external",
  },
];
export const footerUserLinks: appLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passes oublié",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerInformationLinks: appLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

export const FooterLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utlisateur",
    links: footerUserLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
];
