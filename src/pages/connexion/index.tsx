// Importation du SEO (Titre, Desc)
import { Seo } from "@/ui/components/SEO/seo";

// Importation du Layout (Navbar, Footer)
import { Layout } from "@/ui/components/layout/layout";

// Importation du container de la page
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Login() {
  return (
    <>
      <Seo title="Connexion au services" description="DESCRIPTION" />
      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
