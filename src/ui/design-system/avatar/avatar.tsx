import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeStyles: string;
  switch (size) {
    case "small":
      sizeStyles = "61";
      break;
    case "medium":
      sizeStyles = "88";
      break;
    case "large":
      sizeStyles = "140";
      break;
  }
  return <div>
    <Image 
    src=""
    alt=""

    />
  </div>;
};
