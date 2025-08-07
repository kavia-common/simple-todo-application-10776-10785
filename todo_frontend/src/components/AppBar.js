import React from "react";

// PUBLIC_INTERFACE
/**
 * AppBar for todo app (shows title, and optional icon or back button)
 * @param {string} title Main title text.
 * @param {string} [icon] Optional right-side icon url.
 * @param {function} [onBack] If defined, shows Back button and calls onBack.
 * @param {JSX.Element} [children] Optional elements beside title/icon.
 */
function AppBar({ title, icon, onBack, children }) {
  return (
    <header className="todo-appbar" style={{ position: "relative" }}>
      {onBack && (
        <button
          className="todo-back-btn"
          aria-label="Back"
          type="button"
          onClick={onBack}
        >
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ead06132-5398-4162-9100-ac1b76c86165"
            alt="Back"
            style={{ width: "100%", height: "100%" }}
          />
        </button>
      )}
      <span className="todo-appbar-title">{title}</span>
      {icon && (
        <img className="todo-appbar-icon" src={icon} alt="calendar icon" />
      )}
      {children}
    </header>
  );
}

export default AppBar;
