import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const VisitVirtuelleCtaView = () => {
  return (
    <div className="bg-gray-500">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Tu veux en voir plus ?
        </Typography>
        <Typography variant="lead" component="h3" className="mb-16">
          Voici une visite virtuelle du lycée
        </Typography>
        <a
          href="https://view.genial.ly/6098c032f0d8820d3eee0886"
          target="_blank"
        >
          <div className="relative bg-gray-400 rounded h-[626px]">
            <div className="flex flex-col relative h-full items-center justify-center bg-gray z-10 opacity-0 gap-2 hover:opacity-95 rounded animate text-white">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
                weight="medium"
              >
                Cliquez ici pour acceder a la visite virtuelle
              </Typography>
            </div>
            <Image
              fill
              src="/asset/image/visite.jpg"
              alt="Image indiquant une visite virtuelle du lycée Pierre Mendes France Vitrolles en cliquant dessus"
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
};
