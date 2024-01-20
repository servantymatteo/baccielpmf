import { Seo } from "@/ui/components/SEO/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register    () {
  return (
    <>
      <Seo
        title="Inscription aux services (voué a disparaitres)"
        description="DESCRIPTION"
      />
      <Layout><RegisterContainer /></Layout>
    </>
  );
}
