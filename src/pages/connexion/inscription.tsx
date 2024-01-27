// Importation du SEO (Titre, Desc)
import { Seo } from "@/ui/components/SEO/seo";

// Importation du Layout (Navbar, Footer)
import { Layout } from "@/ui/components/layout/layout";

// Importation du container de la page
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
  return (
    <>
      <Seo
        title="Inscription aux services (voué a disparaitres)"
        description="DESCRIPTION"
      />
      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
