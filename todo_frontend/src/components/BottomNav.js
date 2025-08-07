import React from "react";

// PUBLIC_INTERFACE
/**
 * Bottom nav bar for filter switching.
 */
function BottomNav({ onAll, onCompleted, selected }) {
  return (
    <nav className="todo-nav">
      <div
        className="todo-nav-item"
        onClick={onAll}
        role="button"
        style={{ cursor: "pointer" }}
        aria-selected={selected === "all"}
        tabIndex={0}
      >
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19a3e714-bf67-42a3-a769-361e5c897c64"
          alt="playlist icon"
          style={{ width: 30, height: 30 }}
        />
        <span
          className={
            "todo-nav-label" + (selected === "all" ? "" : " completed")
          }
        >
          All
        </span>
      </div>
      <div
        className="todo-nav-item"
        onClick={onCompleted}
        role="button"
        style={{ cursor: "pointer" }}
        aria-selected={selected === "completed"}
        tabIndex={0}
      >
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dcac9b9-9778-44d6-ab81-0c6ccb28ba92"
          alt="tick icon"
          style={{ width: 30, height: 30 }}
        />
        <span
          className={
            "todo-nav-label" + (selected === "completed" ? "" : " completed")
          }
        >
          Completed
        </span>
      </div>
    </nav>
  );
}

export default BottomNav;
