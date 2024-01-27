import { firebaseGoogleUser } from "@/api/authentication";
import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { RiGoogleFill } from "react-icons/ri";
import { toast } from "react-toastify";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { control, onSubmit, errors, isLoading, register, handleSubmit } = form;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input
          isLoading={isLoading}
          placeholder="Johndoe@gmail.com"
          type="email"
          register={register}
          errors={errors}
          errorMsg="Tu dois renseignez tous les champs"
          id="email"
        />
        <Input
          isLoading={isLoading}
          placeholder="Mot de passe"
          type="password"
          register={register}
          errors={errors}
          errorMsg="Tu dois renseigner ce champ"
          id="password"
        />
        <Button isLoading={isLoading} type="submit" fullWith className="w-full">
          S'inscrire
        </Button>
        <Button
          isLoading={isLoading}
          action={firebaseGoogleUser}
          variant="secondary"
          className="w-full text-center flex justify-center"
          icon={{ icon: RiGoogleFill }}
          iconPosition="left"
        >
          S'inscrire via Google
        </Button>
      </form>
    </>
  );
};
