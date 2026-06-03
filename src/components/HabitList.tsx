import HabitItem from "./HabitItem";
import useHabits from "../hooks/useHabits";

function HabitList({ visibleDates }: { visibleDates: Date[] }) {
  const { habits } = useHabits();

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 p-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          visibleDates={visibleDates}
        />
      ))}
    </div>
  );
}

export default HabitList;
