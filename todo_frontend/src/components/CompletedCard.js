import React from "react";

// PUBLIC_INTERFACE
/**
 * Card for displaying completed todo details.
 */
function CompletedCard({ title, subtitle }) {
  return (
    <section className="todo-completed-card">
      <div className="todo-card-titles">
        <span className="todo-card-title">{title}</span>
        <span className="todo-card-subtitle">{subtitle}</span>
      </div>
    </section>
  );
}

export default CompletedCard;
