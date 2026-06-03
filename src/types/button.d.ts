import { ComponentProps } from "react";
import type { Variant } from "./variant";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
}
