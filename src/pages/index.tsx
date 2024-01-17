import Head from "next/head";
import { Seo } from "@/ui/components/SEO/seo";

import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

export default function Home() {
  return (
    <>
      <Seo title="BAC CIEL PMF" description="DESCRIPTION" />
      <Navigation />
      <Footer />
    </>
  );
}
