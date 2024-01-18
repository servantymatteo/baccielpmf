import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Bienvenue sur le site Bac Ciel !
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="max-w-xl"
        >
          Sur ce site vous trouverez tout le nécessaires pour découvrir le bac
          CIEL
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        src="\asset\svg\hero-illu.svg"
        alt="Illustrattion d'un homme tappant sur un ordinateur"
        height={637}
        width={637}
        className="absolute top-0 right-0 z-0"
      />
    </Container>
  );
};
