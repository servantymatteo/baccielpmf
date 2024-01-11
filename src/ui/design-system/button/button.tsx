import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outlines" | "disabled" | "ico";
  icon?: any;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": // Default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/75 text-primary rounded";
      break;
    case "outlines":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/75 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "text-caption3 font-medium px-[14px] py-[15px]";
      break;
    case "medium": // Default
      sizeStyles = "text-caption2 font-medium px-[18px] py-[15px]";
      break;
    case "large":
      sizeStyles = "text-caption1 font-medium px-[22px] py-[18px]";
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          variantStyles,
          sizeStyles,
          icoSize,
          isLoading && "cursor-wait",
          "relative"
        )}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {variant === "accent" || variant === "ico" ? (
              <Spinner size="small" variant="white" />
            ) : (
              <Spinner size="small" />
            )}
          </div>
        )}

        <div className={clsx(isLoading && "invisible")}>
          {icon && variant == "ico" ? (
            <icon.icon size={icoSize} />
          ) : (
            <div className={clsx(icon && "flex items-center gap-1")}>
              {icon && iconPosition == "left" && <icon.icon size={icoSize} />}
              {children}
              {icon && iconPosition == "right" && <icon.icon size={icoSize} />}
            </div>
          )}
        </div>
      </button>
    </>
  );
};
