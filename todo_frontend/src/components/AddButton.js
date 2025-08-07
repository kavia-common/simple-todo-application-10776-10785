import React from "react";

// PUBLIC_INTERFACE
/**
 * Floating add button for todos.
 */
function AddButton({ onClick }) {
  return (
    <button className="todo-add-btn" type="button" onClick={onClick}>
      <img
        className="todo-add-btn-img"
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c22ffbd3-0ba8-4687-9d51-fe5f8c78638a"
        alt="plus"
      />
    </button>
  );
}

export default AddButton;
