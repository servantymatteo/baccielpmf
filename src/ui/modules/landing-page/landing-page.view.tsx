import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top.tsx/hero-top.view";
import { VisitVirtuelleCtaView } from "./components/visite-virtu-cta/visite-virtu-cta.view";

export const LandigPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <VisitVirtuelleCtaView />
    </>
  );
};
