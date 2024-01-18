import { Container } from "@/ui/components/container/container";

interface featuresListInterface {
  imagePath: string;
  imagteAlt: string;
  title: string;
  description: string;
}

const featuresData: featuresListInterface[] = [
  {
    imagePath: "assets/svg/xxx.svg",
    imagteAlt: "Illustration de deux personnes étant en train de discuter",
    title: "La formation",
    description: "Tout savoir sur la formation",
  },
  {
    imagePath: "assets/svg/xxx.svg",
    imagteAlt: "Illustration",
    title: "Contact",
    description: "Contact entre les proffesseurs et les élèves est simplifié",
  },
  {
    imagePath: "assets/svg/xxx.svg",
    imagteAlt:
      "Illustration d'une personne faisant des recherches sur un ordinateur",
    title: "Poursuite",
    description: "Les possibilités de poursuites d'études",
  },
  {
    imagePath: "assets/svg/xxx.svg",
    imagteAlt: "Illustration",
    title: "Ressources",
    description: "Les ressources sont facilements accéssible",
  },
];

export const FeaturedView = () => {
  const featuredList = "";

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="col-span-7">{featuredList}</div>
        <div className="col-span-5"></div>
      </Container>
    </div>
  );
};
