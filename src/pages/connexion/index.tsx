import { Seo } from "@/ui/components/SEO/seo";
import { Layout } from "@/ui/components/layout/layout";
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
