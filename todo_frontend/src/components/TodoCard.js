import React from "react";

// PUBLIC_INTERFACE
/**
 * Represents a single todo item card (all states)
 * @param {string} title
 * @param {string} subtitle
 * @param {object} actions: { onEdit, onDelete, onToggleComplete }
 * @param {boolean} completed
 */
function TodoCard({ title, subtitle, actions = {}, completed }) {
  const checkIcon =
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbdbc197-919e-4290-b0f3-815ca8d7444a";
  const trashIcon =
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f9b5752-3135-4167-9788-499d5d1a6f57";
  const editIcon =
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7520a42d-ea4d-401d-956b-cb035101252c";
  return (
    <section className="todo-card">
      <div className="todo-card-titles">
        <span className="todo-card-title">{title}</span>
        <span className="todo-card-subtitle">{subtitle}</span>
      </div>
      <div className="todo-card-actions">
        <img
          className="todo-card-action-icon"
          src={checkIcon}
          alt="check"
          onClick={actions.onToggleComplete}
          style={{ opacity: completed ? 0.35 : 1, pointerEvents: completed ? 'none' : 'auto' }}
          tabIndex={0}
        />
        <img
          className="todo-card-action-icon"
          src={trashIcon}
          alt="delete"
          onClick={actions.onDelete}
          tabIndex={0}
        />
        <img
          className="todo-card-action-icon"
          src={editIcon}
          alt="edit"
          onClick={actions.onEdit}
          tabIndex={0}
        />
      </div>
    </section>
  );
}

export default TodoCard;
