import { TodoContext } from "../Context";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { HeaderTodo } from "../components/HeaderTodo";
import { TodoError } from "../components/TodoError";
import { TodoLoading } from "../components/TodoLoading";
import { TodoEmpty } from "../components/TodoEmpty";
import { TodoNotFound } from "../components/TodoNotFound";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
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
          new Array(5).fill(1).map((i) => <TodoLoading key={i}></TodoLoading>)}
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
