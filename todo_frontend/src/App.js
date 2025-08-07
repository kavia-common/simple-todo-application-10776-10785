import React, { useState, useEffect } from "react";
import "./App.css";
import "./todo_design_system.css";

import AppBar from "./components/AppBar";
import StatusBar from "./components/StatusBar";
import TodoCard from "./components/TodoCard";
import CompletedCard from "./components/CompletedCard";
import AddButton from "./components/AddButton";
import BottomNav from "./components/BottomNav";
import AddTodoForm from "./components/AddTodoForm";

/**
 * Defines the main application stateful component.
 * Three views: "todos", "add", "completed".
 */
function App() {
  // Simulate persistent todos (later replace with backend or context)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "TODO TITLE",
      detail: "TODO SUB TITLE",
      completed: false,
    },
    {
      id: 2,
      title: "Second Task",
      detail: "Another description",
      completed: false,
    },
  ]);
  const [nav, setNav] = useState("all"); // all/completed
  const [screen, setScreen] = useState("todos"); // todos/add/completed
  const [editing, setEditing] = useState(null); // todo to edit

  // Theme toggle (optional, re-used from template)
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  function handleAddClick() {
    setEditing(null);
    setScreen("add");
  }
  // PUBLIC_INTERFACE
  function handleBack() {
    if (screen === "add") setScreen("todos");
    else if (screen === "completed") setScreen("todos");
    else setScreen("todos");
  }
  // PUBLIC_INTERFACE
  function handleNavAll() {
    setNav("all");
    setScreen("todos");
  }
  // PUBLIC_INTERFACE
  function handleNavCompleted() {
    setNav("completed");
    setScreen("completed");
  }

  // CRUD logic
  function handleAddOrUpdateTodo({ title, detail }) {
    if (editing) {
      setTodos((prev) =>
        prev.map((t) =>
          t.id === editing.id
            ? { ...t, title, detail }
            : t
        )
      );
      setEditing(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
          title,
          detail,
          completed: false,
        },
      ]);
    }
    setScreen("todos");
  }
  function handleDeleteTodo(todo) {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  }
  function handleEditTodo(todo) {
    setEditing(todo);
    setScreen("add");
  }
  function handleCompleteTodo(todo) {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: true } : t
      )
    );
  }

  // Page Layouts
  return (
    <div className="App" style={{ background: "var(--color-ffffff)" }}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {screen === "todos" && (
        <>
          <StatusBar type="default" />
          <AppBar
            title="TODO APP"
            icon="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/145850ac-97e2-4183-adf7-cb8212c5f4ef"
          />
          <main style={{ marginTop: 12, marginBottom: 80 }}>
            {todos.filter((t) => !t.completed).length === 0 && (
              <p style={{ color: "#8b8787" }}>No todos yet!</p>
            )}
            {todos
              .filter((t) => !t.completed)
              .map((todo) => (
                <TodoCard
                  key={todo.id}
                  title={todo.title}
                  subtitle={todo.detail}
                  completed={todo.completed}
                  actions={{
                    onEdit: () => handleEditTodo(todo),
                    onDelete: () => handleDeleteTodo(todo),
                    onToggleComplete: () => handleCompleteTodo(todo),
                  }}
                />
              ))}
          </main>
          <AddButton onClick={handleAddClick} />
          <BottomNav
            onAll={handleNavAll}
            onCompleted={handleNavCompleted}
            selected={nav}
          />
        </>
      )}
      {screen === "add" && (
        <>
          <StatusBar type="add" />
          <AppBar title={editing ? "Edit Task" : "Add Task"} onBack={handleBack} />
          <AddTodoForm
            initial={editing || {}}
            onSubmit={handleAddOrUpdateTodo}
            onCancel={handleBack}
          />
        </>
      )}
      {screen === "completed" && (
        <>
          <StatusBar type="completed" />
          <AppBar title="Completed Task" onBack={handleBack} />
          <main style={{ marginTop: 12 }}>
            {todos.filter((t) => t.completed).length === 0 && (
              <p style={{ color: "#8b8787" }}>No completed todos</p>
            )}
            {todos
              .filter((t) => t.completed)
              .map((todo) => (
                <CompletedCard
                  key={todo.id}
                  title={todo.title}
                  subtitle={todo.detail}
                />
              ))}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
