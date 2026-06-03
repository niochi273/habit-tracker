import type { Variant } from "../types/variant";

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-500";

    case "secondary":
      return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";

    case "ghost-destructive":
      return "hover:bg-red-800 text-red-800 hover:text-red-200";

    default: {
      throw new Error(`Invalid variant: ${variant satisfies never}`);
    }
  }
}

export default getVariantStyles;
