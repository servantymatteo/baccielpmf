import { useState } from "react";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { forgetFormFielsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toogle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm<forgetFormFielsType>();

  const handleResetPassword = async ({ email }: forgetFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
    toast.success(`L'email a été expédié a l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<forgetFormFielsType> = async (formData) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };
  return (
    <>
      <ForgetPasswordView
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
