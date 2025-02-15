import React, { useState } from "react";
import ChevronDown from "../../assets/arrow-down.png";
import "./collapse.scss";

function Collapse({ title, content, isList = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse-title">{title}</span>
        <img
          src={ChevronDown}
          className={`icon ${isOpen ? "rotate" : ""}`}
        ></img>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {isList ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
export default Collapse;
