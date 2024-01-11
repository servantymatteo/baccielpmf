import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
}

export const Avatar = ({ size = "medium" }: Props) => {
  let sizeStyles: string;
  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";
      break;
    case "medium": // Default
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
  }
  return (
    <div className={clsx(sizeStyles, "bg-gray-400 rounded-full")}>
      {/* <Image
        src="/asset/image/daniel-lincoln-pe-X2NUwVQo-unsplash 1.png"
        alt="Avatar de Daniel Lincoln"
        width={50}
        height={50}
        className="rounded-full"
      /> */}
    </div>
  );
};
