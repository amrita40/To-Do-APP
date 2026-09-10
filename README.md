# Tasks — To-Do List App

A small, focused to-do list web application. Add tasks, edit them, mark them
complete, delete them, and everything is saved automatically so your list is
still there the next time you open the page.

![Tasks app with three tasks, one marked complete](https://github.com/amrita40/To-Do-APP/blob/main/3%20Taskes%20added)

## Features

- Add a new task (via the Add button or by pressing Enter)
- Edit an existing task's text
- Delete a task
- Mark a task complete, and mark it incomplete again
- Tasks persist in the browser (localStorage) across refreshes and restarts
- Clear empty state when there are no tasks
- Whitespace-only input is rejected when adding or editing
- Responsive layout that works on desktop and mobile screens

## Technologies used

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build tool and dev server)
- Plain CSS (no UI or CSS framework)
- Browser `localStorage` for persistence (no backend or database)

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (installed alongside Node.js)

## Installation

Clone the repository (or copy the project folder), then install
dependencies from inside the project directory:

```bash
cd todo-app
npm install
```

## Running locally

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in
your browser to use the app. The dev server supports hot reloading, so
changes to the source files appear immediately.

## Building for production

Create an optimized production build:

```bash
npm run build
```

The output is written to the `dist/` folder. You can preview the production
build locally with:

```bash
npm run preview
```

## Walkthrough

**Start with an empty list.** Type into the input and press Enter or click
Add. Whitespace-only text is ignored.

![Empty list with a task being typed in](https://github.com/amrita40/To-Do-APP/blob/main/Empty%20image.png)

**The task appears in the list**, with a live count of how many are still
remaining.

![First task added, 1 of 1 remaining](https://github.com/amrita40/To-Do-APP/blob/main/First%20task%20added)

**Add as many tasks as you need.** Each one gets its own checkbox, plus
Edit and Delete buttons.

![Three tasks in the list, none completed](https://github.com/amrita40/To-Do-APP/blob/main/3%20Taskes%20added)

**Check a task off** to mark it complete — it gets struck through and the
remaining count updates.

![One of three tasks marked complete](https://github.com/amrita40/To-Do-APP/blob/main/Marked%20as%20Completed)

**Delete a task** you no longer need. The list — and the count — update
immediately.

![Two tasks remaining after one was deleted](https://github.com/amrita40/To-Do-APP/blob/main/1%20task%20deleted%20and%202%20remaining)

## How persistence works

The app stores your task list as JSON in the browser's `localStorage` under
a single key. Every time a task is added, edited, completed, or deleted, the
updated list is written to `localStorage`. When the app loads, it reads that
key back and rebuilds the task list. If the stored data is missing or
malformed, the app safely falls back to an empty list instead of crashing.

Because `localStorage` is per-browser, tasks are not shared across different
browsers or devices — this app has no server or account system.
