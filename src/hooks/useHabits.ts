import { useContext } from "react";
import { HabitContext } from "../utils/getHabitContext";

export default function useHabits() {
  const habitContext = useContext(HabitContext);
  if (habitContext == null) throw new Error("Null context");

  return habitContext;
}
