import Head from "next/head";
import { Seo } from "@/ui/components/SEO/seo";

import { Navigation } from "@/ui/components/navigation/navigation";

export default function Home() {
  return (
    <>
      <Seo title="BAC CIEL PMF" description="DESCRIPTION" />
      <Navigation />
    </>
  );
}
