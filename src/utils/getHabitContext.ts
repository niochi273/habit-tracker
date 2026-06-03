import { createContext } from "react";
import type { Context } from "../types/context";

export const HabitContext = createContext<null | Context>(null);
