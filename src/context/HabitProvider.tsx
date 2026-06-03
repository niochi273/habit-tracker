import { type ReactNode } from "react";
import type { Habit } from "../types/habit";
import { HabitContext } from "../utils/getHabitContext";
import { isSameDay } from "date-fns";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

  function addHabit(name: string) {
    setHabits((h) => [
      ...h,
      { id: crypto.randomUUID(), name, completions: [] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((habits) => habits.filter((h) => h.id !== id));
  }

  function toggleHabit(id: string, date: Date) {
    setHabits((habits) =>
      habits.map((h) => {
        if (h.id !== id) return h;

        const alreadyDone = h.completions.some((c) => isSameDay(c, date));
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];

        return { ...h, completions };
      }),
    );
  }

  return (
    <HabitContext value={{ addHabit, deleteHabit, toggleHabit, habits }}>
      {children}
    </HabitContext>
  );
}
