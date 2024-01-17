import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { uuid } from "uuidv4";
import { appLinks, footerLinks } from "@/types/appLinks";
import { FooterLinks } from "./app-links";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = FooterLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks}></FooterLink>
  ));
  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center">
          <Typography variant="caption1" theme="white" weight="medium">
            Bac Ciel Pierre Mendes France
          </Typography>
          <Typography variant="caption3" theme="gray">
            Tout savoir sur la Filière
          </Typography>
          <a
            href="https://www.site.ac-aix-marseille.fr/lyc-mendesfrance-vitrolles/spip/-00-Accueil-.html"
            target="blank"
          >
            <Image
              src="\asset\svg\LYCEE.svg"
              width={223}
              height={216}
              alt="Site du lycée"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between ">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear}|  `}{" "}
            <a
              href="https://gitlab.com/bacciel/front-end"
              target="blank"
              className="underline"
            >{`Servanty Matteo`}</a>
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

interface foorterLinkProps {
  data: footerLinks;
}

const FooterLink = ({ data }: foorterLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography
        theme="gray"
        variant="caption3"
        weight="regular"
        className="space-y-4"
      >
        {linkList}
      </Typography>
    </div>
  );
};
