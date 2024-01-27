import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ActiveLink } from "./active-link";
//lien interne
import Link from "next/link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className=" flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Bac CIEL PMF
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Découvre la nouvelle filière !
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/projects">Projects</ActiveLink>
            <Link href="/formations">Formations</Link>
            <Link href="/contact">Contact</Link>
            <ActiveLink href="/design-system">Design System</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" baseUrl="/connexion/">
              Connexion
            </Button>
            <Button
              size="small"
              baseUrl="/connexion/inscription"
              variant="secondary"
            >
              Inscription
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
