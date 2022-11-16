import { useContext } from "react";
import { TodoContext } from "../../Context";

import "./TodoSearch.css";

function TodoSearch() {
  const { setSearchValue } = useContext(TodoContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="TodoSearch">
      <input placeholder="Buscar tarea..." onChange={handleChange} />
    </section>
  );
}

export { TodoSearch };
