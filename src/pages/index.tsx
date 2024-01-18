import Head from "next/head";
import { Seo } from "@/ui/components/SEO/seo";

import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo
        title="BAC CIEL PIERRE MENDES FRANCE"
        description="Découvrez l'excellence éducative au lycée BAC CIEL PIERRE MENDES FRANCE. Notre filière offre une formation complète, un entraînement intensif et l'accès à des ressources innovantes. Parcourez virtuellement notre campus pour une immersion totale. Choisissez l'avenir avec BAC CIEL : l'éducation redéfinie, l'excellence assurée."
      />
      <Navigation />
      <Footer />
    </>
  );
}
