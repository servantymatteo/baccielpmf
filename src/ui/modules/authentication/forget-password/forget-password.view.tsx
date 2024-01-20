import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { ForgerPasswordForm } from "./forgetForm";

export const ForgetPasswordView = () => {
  return (
    <>
      <Container className="grid grid-cols-2 gap-20 mb-32 mt-5">
        <div className="flex items-center">
          <div className="relative w-full h-[531px]">
            <Image
              fill
              src="\asset\svg\Authentication\password.svg"
              alt="EEEEE"
              className="blur-2xl"
            />
            <Image
              fill
              src="\asset\svg\Authentication\password.svg"
              alt="EEEEE"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Box padding_y="py-5">
            <div className=" flex items-center justify-between">
              <div className="">
                <Typography variant="h5" component="h1">
                  Mot de passe perdu ?
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href="/connexion/inscription">Se connecter</Link>
                </Typography>
              </div>
            </div>
            <ForgerPasswordForm />
          </Box>
        </div>
      </Container>
    </>
  );
};
