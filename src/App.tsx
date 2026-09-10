import { useEffect, useRef, useState } from 'react';
import type { Todo } from './types';

const STORAGE_KEY = 'todo-app.tasks';

function loadTodos(): Todo[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is Todo =>
        item &&
        typeof item.id === 'string' &&
        typeof item.text === 'string' &&
        typeof item.completed === 'boolean',
    );
  } catch {
    return [];
  }
}

function createId(): string {
  return typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (editingId !== null) {
      editInputRef.current?.focus();
    }
  }, [editingId]);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    const text = newTaskText.trim();
    if (!text) return;

    const newTodo: Todo = { id: createId(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setNewTaskText('');
  }

  function handleToggleComplete(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditingText('');
    }
  }

  function handleStartEdit(todo: Todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditingText('');
  }

  function handleSaveEdit(id: string) {
    const text = editingText.trim();
    if (!text) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
    setEditingId(null);
    setEditingText('');
  }

  function handleEditKeyDown(event: React.KeyboardEvent, id: string) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSaveEdit(id);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      handleCancelEdit();
    }
  }

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="page">
      <main className="card">
        <header className="header">
          <h1>Tasks</h1>
          <p className="subtitle">
            {todos.length === 0
              ? 'Nothing on your list yet'
              : `${remaining} of ${todos.length} remaining`}
          </p>
        </header>

        <form className="add-form" onSubmit={handleAddTask}>
          <label htmlFor="new-task" className="visually-hidden">
            New task
          </label>
          <input
            id="new-task"
            type="text"
            placeholder="What needs doing?"
            value={newTaskText}
            onChange={(event) => setNewTaskText(event.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>

        {todos.length === 0 ? (
          <p className="empty-state">
            Add your first task above to get started.
          </p>
        ) : (
          <ul className="task-list">
            {todos.map((todo) => {
              const isEditing = editingId === todo.id;

              return (
                <li
                  key={todo.id}
                  className={`task${todo.completed ? ' task-completed' : ''}`}
                >
                  {isEditing ? (
                    <div className="task-edit">
                      <label htmlFor={`edit-${todo.id}`} className="visually-hidden">
                        Edit task
                      </label>
                      <input
                        id={`edit-${todo.id}`}
                        ref={editInputRef}
                        type="text"
                        value={editingText}
                        onChange={(event) => setEditingText(event.target.value)}
                        onKeyDown={(event) => handleEditKeyDown(event, todo.id)}
                      />
                      <div className="task-actions">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleSaveEdit(todo.id)}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <label className="task-label">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleToggleComplete(todo.id)}
                          aria-label={
                            todo.completed
                              ? `Mark "${todo.text}" as incomplete`
                              : `Mark "${todo.text}" as complete`
                          }
                        />
                        <span className="task-text">{todo.text}</span>
                      </label>
                      <div className="task-actions">
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() => handleStartEdit(todo)}
                          aria-label={`Edit "${todo.text}"`}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(todo.id)}
                          aria-label={`Delete "${todo.text}"`}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
