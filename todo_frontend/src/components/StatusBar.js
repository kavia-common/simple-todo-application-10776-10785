import React from "react";

// PUBLIC_INTERFACE
/**
 * Renders top status bar with correct image.
 * @param {string} type One of: 'default', 'add', 'completed'.
 */
function StatusBar({ type = "default" }) {
  let img;
  if (type === "add") {
    img =
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1240095b-1049-4d8d-a3a1-62e71c3eda78";
  } else if (type === "completed") {
    img =
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9b4436b-f0cf-43b5-87ea-198b70a29e35";
  } else {
    img =
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a57e6aa5-7942-4a3c-be2b-df14cf80231d";
  }
  return (
    <div className="todo-statusbar">
      <img src={img} alt="status bar" style={{ width: "100%", height: "44px" }} />
    </div>
  );
}

export default StatusBar;
