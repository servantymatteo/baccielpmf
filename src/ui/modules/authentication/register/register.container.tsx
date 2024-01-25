import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreatUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toogle";

export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
  }: RegisterFormFielsType) => {
    const { error, data } = await firebaseCreatUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    setIsLoading(false);
    toast.success("Bienvenue sur l'annuaire !");
    console.log(data);
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true);
    console.log("FormDAta", formData);

    const { email, password } = formData;
    if (password.length <= 7) {
      toast.error("Ton mot de passe doit comporter au minimum 8 caractères !");
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};
