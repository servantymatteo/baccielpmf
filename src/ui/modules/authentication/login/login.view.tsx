import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./loginForm";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export const LoginView = ({ form }: Props) => {
  return (
    <>
      <Container className="grid grid-cols-2 gap-20 mb-32 mt-5">
        <div className="flex items-center">
          <div className="relative w-full h-[531px]">
            <Image
              fill
              src="\asset\svg\Authentication\login.svg"
              alt="EEEEE"
              className="blur-2xl"
            />
            <Image fill src="\asset\svg\Authentication\login.svg" alt="EEEEE" />
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div className=" flex items-center justify-between">
              <div className="">
                <Typography variant="h5" component="h1">
                  Connexion
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Typography variant="caption4" component="span" theme="gray">
                  Tu n'as pas de compte ?
                </Typography>
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href="/connexion/inscription">S'inscire</Link>
                </Typography>
              </div>
            </div>
            <LoginForm form={form} />
            <Typography variant="caption4" theme="primary">
              <Link
                href="/connexion/mot-de-passe-perdu"
                className="flex justify-center"
              >
                Mot de passe perdu ?
              </Link>
            </Typography>
          </Box>
        </div>
      </Container>
    </>
  );
};
