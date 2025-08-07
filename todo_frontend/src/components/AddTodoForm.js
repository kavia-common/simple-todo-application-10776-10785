import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * Form for adding or editing a todo.
 * Calls onSubmit({title, detail}), and onCancel (for back/cancel button).
 */
function AddTodoForm({ initial = {}, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initial.title || "");
  const [detail, setDetail] = useState(initial.detail || "");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title, detail });
  }

  return (
    <form id="add-todo-form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="todo-input-block">
        <label className="todo-input-label" htmlFor="todo-title">
          Title
        </label>
        <input
          id="todo-title"
          name="title"
          className="todo-input"
          placeholder="Enter task title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="todo-input-block">
        <label className="todo-input-label" htmlFor="todo-detail">
          Detail
        </label>
        <input
          id="todo-detail"
          name="detail"
          className="todo-input"
          placeholder="Enter task details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <button type="submit" className="todo-submit-btn">
        ADD
      </button>
    </form>
  );
}

export default AddTodoForm;
