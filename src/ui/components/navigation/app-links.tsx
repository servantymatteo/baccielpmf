import { appLinks } from "@/types/appLinks";
import { RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const footerApplicationLinks: appLinks[] = [
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
const footerUserLinks: appLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion/",
    type: "internal",
  },
  {
    label: "Mot de passes oublié",
    baseUrl: "/connexion/mot-de-passe-perdu",
    type: "internal",
  },
  {
    label: "Design System",
    baseUrl: "/design-system",
    type: "internal",
  },
];
const footerInformationLinks: appLinks[] = [
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
export const footerSocialNetworksLinks: appLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/",
    type: "external",
    icon: RiYoutubeLine,
  },
  {
    label: "instagram",
    baseUrl: "https://instagram.com",
    type: "external",
    icon: RiInstagramLine,
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
  {
    label: "Réseaux Sociaux",
    links: footerSocialNetworksLinks,
  },
];
