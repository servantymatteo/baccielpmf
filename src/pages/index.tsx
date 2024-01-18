import { Seo } from "@/ui/components/SEO/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandigPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo
        title="BAC CIEL PIERRE MENDES FRANCE"
        description="Découvrez l'excellence éducative au lycée BAC CIEL PIERRE MENDES FRANCE. Notre filière offre une formation complète, un entraînement intensif et l'accès à des ressources innovantes. Parcourez virtuellement notre campus pour une immersion totale. Choisissez l'avenir avec BAC CIEL : l'éducation redéfinie, l'excellence assurée."
      />
      <Layout isdisplayBreadcrumbs={false}>
        <LandigPageContainer />
      </Layout>
    </>
  );
}
