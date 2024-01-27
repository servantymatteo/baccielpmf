import type { AppProps } from "next/app";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Flip}
        draggable
      />
      <Component {...pageProps} />
    </>
  );
}
