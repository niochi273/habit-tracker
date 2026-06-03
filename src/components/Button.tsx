import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "../types/button";
import getVariantStyles from "../utils/getVariantStyles";

function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "cursor-pointer transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        getVariantStyles(variant),
        className,
      )}
    />
  );
}

export default Button;
