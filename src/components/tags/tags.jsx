import React from "react";
import "./tags.scss";

function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <p key={index} className="tags">
          {tag}
        </p>
      ))}
    </div>
  );
}
export default Tags;
