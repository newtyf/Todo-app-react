import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, item } = useContext(TodoContext);
  let todoCounterProgress = Math.floor(
    (completedTodos.length / item.length) * 100
  );
  if (isNaN(todoCounterProgress)) todoCounterProgress = 0;

  return (
    <div className="TodoCounter">
      <span className="TodoCounter-progress__porcentage">
        {todoCounterProgress}%
      </span>
      <div
        style={{
          width: todoCounterProgress + "%",
          transition: "200ms ease-in-out",
        }}
        className="TodoCounter-progress"
      ></div>
    </div>
  );
}

export { TodoCounter };
