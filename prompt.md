Build a complete working To-Do List web application using React, TypeScript, and Vite.

This is a small coding assignment, so keep the implementation intentionally simple and focused. Do not add functionality that is not required by the specification.

Required functionality

The application must allow the user to:

Add a new task.
Edit an existing task.
Delete an existing task.
Mark a task as complete.
Mark a completed task as incomplete again.
Persist all tasks using browser localStorage so that tasks remain available after refreshing or reopening the page.

These are the core requirements. Do not add unrelated features such as authentication, user accounts, a backend, a database, APIs, Redux, task categories, priorities, due dates, notifications, drag-and-drop, search, filters, analytics, or AI-generated tasks.

Technology

Use:

React
TypeScript
Vite
Plain CSS
Browser localStorage for persistence

Do not introduce additional libraries unless there is a clear technical reason they are necessary.

Architecture

Use a minimal architecture appropriate for a small To-Do application.

Do not over-engineer the project with unnecessary layers, state-management libraries, services, APIs, or abstractions.

A simple structure such as the following is preferred:

todo-app/
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── public/
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts

Keep the main application logic understandable and easy to review.

Define a TypeScript Todo type/interface containing only the information actually needed, such as:

id
text
completed

Use unique IDs for tasks.

User interface

Create a clean, modern, professional, responsive To-Do List interface.

The UI should be simple rather than visually overloaded.

The main interface should contain:

A clear application heading.
A text input for entering a task.
An Add button.
A list of existing tasks.
A way to mark each task complete/incomplete.
An Edit action for each task.
A Delete action for each task.
A clear empty state when there are no tasks.

Completed tasks should have an obvious visual distinction, such as a strikethrough and/or reduced emphasis.

Make the interface usable on both desktop and smaller screens.

Do not add unnecessary UI elements or features beyond the requirements.

Adding tasks

When the user enters a task and submits it:

Trim leading and trailing whitespace.
Do not create a task if the input is empty or contains only whitespace.
Add the new task to the task list.
Give it a unique ID.
Set completed to false.
Clear the input after a successful addition.

The user should be able to add a task using the Add button and by pressing Enter while the input is focused.

Editing tasks

Each task should have an Edit action.

When Edit is selected:

Allow the user to modify the task text.
Preserve the task's existing ID.
Do not create a duplicate task.
Trim the edited text.
Do not save an empty or whitespace-only task.
Provide a clear way to save the edited task.
Allow the user to cancel editing without changing the original task.

Keep the editing interaction simple and intuitive.

Completing tasks

Each task should have a checkbox or similarly clear control.

When the user marks a task complete:

Update its completed state to true.
Visually distinguish it as completed.

The user must also be able to mark a completed task as incomplete again.

The completed state must persist after refreshing the page.

Deleting tasks

Each task should have a Delete action.

When Delete is selected:

Remove only that task.
Update the application immediately.
Persist the deletion to localStorage.

If the deleted task was the last task, the application should correctly return to the empty state.

Persistence

Use localStorage as the only persistence mechanism.

When the application starts:

Read the saved tasks from localStorage.
If no saved tasks exist, start with an empty list.
Parse the stored data safely.
If stored data is invalid or malformed, the application should not crash. Gracefully fall back to an empty task list.

Whenever tasks are added, edited, completed/incompleted, or deleted, persist the updated task list to localStorage.

The following sequence must work correctly:

Add task → refresh page → task still exists.

Complete task → refresh page → task is still completed.

Edit task → refresh page → edited text remains.

Delete task → refresh page → deleted task does not return.

State management

Use React state for the current task list and form/editing state.

Use immutable state updates.

Do not mutate the existing task array or individual task objects directly.

Keep the logic straightforward enough that another developer can easily understand how add, edit, delete, complete, and persistence work.

Edge cases

Handle at least these cases:

Empty task submission.
Whitespace-only task submission.
Empty/whitespace-only edited task.
Invalid localStorage data.
Deleting the last remaining task.
Refreshing after any task operation.
Toggling a completed task back to incomplete.
Editing a task without changing its completion state.

The application should not crash because of these cases.

Accessibility and usability

Keep the application accessible and usable without making the implementation unnecessarily complex.

Use:

Proper labels for form controls where appropriate.
Buttons with clear text or accessible labels.
Keyboard-friendly form interaction.
Sufficiently clear visual states for completed tasks and editing.
Reasonable focus behavior when editing a task.

Do not sacrifice simplicity for excessive accessibility abstractions.

Code quality

Write clean, readable TypeScript and React code.

Avoid:

Unnecessary abstractions.
Duplicate logic.
Unused dependencies.
Unused variables.
Hardcoded task data.
Excessive comments explaining obvious code.
Overly complicated state management.

Use meaningful variable and function names.

The final implementation should be easy for a developer to understand and explain.

Testing and verification

After implementing the application, review the code against every requirement above.

Then verify the following manually:

The application starts successfully.
A task can be added.
Empty tasks cannot be added.
A task can be edited.
An edit cannot save an empty task.
A task can be deleted.
A task can be marked complete.
A completed task can be marked incomplete.
Added tasks survive a page refresh.
Edited tasks survive a page refresh.
Completion state survives a page refresh.
Deleted tasks remain deleted after a page refresh.
Invalid localStorage data does not crash the application.
Deleting the final task correctly shows the empty state.
The layout remains usable on smaller screens.

Do not claim that something was tested unless it was actually verified.

README.md

Create a concise README.md containing:

What the application is.
Features implemented.
Technologies used.
Prerequisites.
Installation instructions.
How to run the application locally.
How to create a production build.
A short explanation that localStorage is used for persistence.

The instructions must be accurate and sufficient for another developer to clone/install/run the application.

Final output

Provide the complete project implementation file by file.

Before writing the code, briefly explain the implementation approach and why React + TypeScript + localStorage is sufficient for this assignment.

Keep the final solution focused strictly on the requirements. The goal is not to maximize the number of features, but to produce a polished, reliable, understandable implementation of the required To-Do List functionality.
