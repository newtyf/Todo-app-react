import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1");

  const [openModal, setOpenModal] = useState(false)

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = item.filter((todo) => !!todo.completed);

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const checkTodo = (text, checked) => {
    const newTodos = item.slice();
    newTodos.map((i) => {
      if (i.text === text) i.completed = checked;
      return i;
    });
    saveItem(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = item.concat([{text: text, completed: false}]);
    saveItem(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = item.slice().filter((todo) => todo.text !== text);
    saveItem(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        item,
        saveItem,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        checkTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider}