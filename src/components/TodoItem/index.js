import React from "react";
import "./TodoItem.css";

function TodoItem({text, completed, checkTodo, deleteTodo}) {

  const handelChange = (e) => {
    const {checked} = e.target
    checkTodo(text, checked)
  }

  return (
    <li className="TodoItem">
      <label className="container">
        <input type="checkbox" onChange={handelChange} checked={completed} />
        <span className="checkmark"></span>
      </label>
      <div className={`TodoItem-content ${completed && 'active'}`}>
        <p className={`${completed && 'active'}`}>{text}</p>
        <span onClick={() => deleteTodo(text)}>X</span>
      </div>
    </li>
  );
}

export { TodoItem };
