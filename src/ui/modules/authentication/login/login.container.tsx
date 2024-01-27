// View page
import { LoginView } from "./login.view";

// hook
import { LoginFormFielsType } from "@/types/forms";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToggle } from "@/hooks/use-toogle";

// notification (taost.(error...)('message'))
import { toast } from "react-toastify";

// firebase
import { firebaseSignInUser } from "@/api/authentication";
import { auth } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user", user);
        // ...
      } else {
        console.log("Tu n'es pas connecté");
        // User is signed out
        // ...
      }
    });
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvnue sur l'annuaire !");
    setIsLoading(false);
    reset;
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 7) {
      toast.error("Ton mot de passe doit comporter au minimum 8 caractères !");
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };

  return (
    <>
      <LoginView
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
