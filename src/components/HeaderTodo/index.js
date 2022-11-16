import React from "react";
import "./HeaderTodo.css";

const date = new Date(Date.now());
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()

function HeaderTodo() {
  return (
    <header className="HeaderTodo">
      <p className="Header-date">
        {day}/{month}/{year}
      </p>
      <div className="Title">
        <div className="Title-text">
          <p>GET</p>
          <p>
            <span style={{ color: "#646470" }}>SH</span>IT
          </p>
          <p>DOWN</p>
        </div>
        <div className="Avatar-title">
          <img src="./avatar.jpg" alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export { HeaderTodo };
