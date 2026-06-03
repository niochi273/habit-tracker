import getStreak from "../utils/getStreak";
import Button from "./Button";
import { format, isFuture, isSameDay } from "date-fns";
import useHabits from "../hooks/useHabits";
import type { HabitItemProps } from "../types/habit-item";

function HabitItem({ habit, visibleDates }: HabitItemProps) {
  const { deleteHabit, toggleHabit } = useHabits();
  const streak = getStreak(habit.completions);

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          {streak !== 0 && (
            <span className="text-sm text-amber-400">{streak}</span>
          )}
        </div>
        <Button
          className="text-sm"
          variant="ghost-destructive"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={
              habit.completions.some((d) => isSameDay(date, d))
                ? "primary"
                : "secondary"
            }
            onClick={() => toggleHabit(habit.id, date)}
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default HabitItem;
