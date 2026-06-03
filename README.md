# Habit Tracker

A minimal, fast habit tracker for the browser. Add the habits you want to build, tick them off day by day, and watch your streaks grow. Everything is stored locally in your browser — no account, no backend, no tracking.

## Features

- **Weekly grid** — see a full week at a glance and toggle any day with a single click.
- **Week navigation** — step back through previous weeks; future weeks and future days are locked.
- **Streaks** — each habit shows its current consecutive-day streak.
- **Daily summary** — a quick "X / Y done today" count in the header.
- **Local persistence** — habits and completions are saved to `localStorage` and restored on reload.

## Tech Stack

- [React 19](https://react.dev/) with the React Compiler enabled
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [date-fns](https://date-fns.org/) for date math

## Getting Started

Requires [Node.js](https://nodejs.org/) (18+ recommended).

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the URL printed in the terminal (defaults to http://localhost:5173).

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR           |
| `npm run build`   | Type-check and build for production          |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint over the project                  |

## Project Structure

```
src/
├── components/      UI components (Header, HabitForm, HabitList, HabitItem, Button)
├── context/         HabitProvider — global habit state
├── hooks/           useHabits, useLocalStorage
├── utils/           getStreak, getVariantStyles, getHabitContext
├── types/           Shared TypeScript type definitions
├── styles/          Tailwind entry stylesheet
└── App.tsx          Root component and week-range logic
```

## How It Works

Habits live in a single React context (`HabitProvider`) and are persisted through the `useLocalStorage` hook, which serializes completion dates to JSON and revives them back into `Date` objects on load. The current streak is computed by counting consecutive days backwards from today, and the weekly view is derived from a `weekOffset` using `date-fns` interval helpers.

## License

MIT
