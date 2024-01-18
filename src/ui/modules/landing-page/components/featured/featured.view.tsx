import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
  imagePath: string;
  imagteAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/asset/svg/formation.svg",
    imagteAlt: "Illustration de deux personnes étant en train de discuter",
    title: "La formation",
    description: "Tout savoir sur la formation",
  },
  {
    imagePath: "/asset/svg/contact.svg",
    imagteAlt: "Illustration",
    title: "Contact",
    description: "Contact entre les proffesseurs et les élèves est simplifié",
  },
  {
    imagePath: "/asset/svg/poursuite.svg",
    imagteAlt:
      "Illustration d'une personne faisant des recherches sur un ordinateur",
    title: "Poursuite",
    description: "Les possibilités de poursuites d'études",
  },
  {
    imagePath: "/asset/svg/ressources.svg",
    imagteAlt: "Illustration",
    title: "Ressources",
    description: "Les ressources sont facilements accéssible",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((features) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-400">
        <Image
          fill
          src={features.imagePath}
          alt={features.imagteAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={features.imagePath}
          alt={features.imagteAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {features.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {features.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
        <div className="col-span-5">
          <Typography variant="h2" component="h2" className="mb-5">
            Une noucelle filière connectée !
          </Typography>
          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="mb-8"
          >
            Le bac pro CIEL, une filière connectée qui forme aux métiers du
            numérique.Découvrez notre filière de formation professionnelle qui
            offre de nombreux débouchés professionnels.
          </Typography>
          <Button
            variant="secondary"
            baseUrl="/"
            icon={{ icon: RiArrowRightLine }}
            iconPosition="right"
          >
            Commencer
          </Button>
        </div>
      </Container>
    </div>
  );
};
