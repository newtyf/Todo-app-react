import { TodoContext } from "../../Context";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { HeaderTodo } from "../HeaderTodo";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoEmpty } from "../TodoEmpty";
import { TodoNotFound } from "../TodoNotFound";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "./App.css";
import { useContext } from "react";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    checkTodo,
    deleteTodo,
    openModal,
    searchValue,
  } = useContext(TodoContext);

  let modal = document.querySelector(".modalBackground");
  if (openModal) {
    modal.style.display = "flex";
  }
  setTimeout(() => {
    let modal = document.querySelector(".modalBackground");
    if (!openModal) {
      modal.style.display = "none";
    }
  }, 600);

  return (
    <div className="App">
      <HeaderTodo />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError></TodoError>}
        {loading &&
          new Array(5).fill(1).map((i, index) => <TodoLoading key={index}></TodoLoading>)}
        {!loading && !searchedTodos.length && searchValue.length < 1 && (
          <TodoEmpty></TodoEmpty>
        )}
        {!loading && searchValue.length >= 1 && !searchedTodos.length && (
          <TodoNotFound text="No se encontraron coincidencias!"></TodoNotFound>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>
      <Modal name={openModal ? "open" : "close"}>
        <TodoForm></TodoForm>
      </Modal>
      <CreateTodoButtom />
    </div>
  );
}

export default App;
