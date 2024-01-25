import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: any;
  id: string;
  required?: boolean;
  isAutoComplete?: boolean;
}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "",
  id,
  required = true,
  isAutoComplete = false,
}: Props) => {
  console.log("errors", errors[id]);
  return (
    <div className="space-y-2">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          errors[id]
            ? "border-error text-error focus:outline-none focus:ring-error placeholder-gray"
            : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoComplete ? "on" : "false"}
      />

      {errors[id] && (
        <Typography variant="caption4" component="div" theme="error">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  );
};
