import { Seo } from "@/ui/components/SEO/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassowrd() {
  return (
    <>
      <Seo
        title="Mot de passe oublié"
        description="Page de récupération du mot de passe"
      />
      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
