import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./TodoForm.css"

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // tarea pendiente
    let text = e.target[0].value;
    console.log(text);
    addTodo(text);
    setOpenModal(false);
    e.target[0].value = "";
  };

  return (
    <form onSubmit={onSubmit} className="formTodo">
      <label>AGREGAR TAREA</label>
      <textarea placeholder="cortar la cebolla" minLength={2} required/>
      <div>
        <button type="submit">AÑADIR</button>
      </div>
    </form>
  );
}

export { TodoForm };
