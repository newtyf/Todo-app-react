import { useContext, useState } from "react";
import { TodoContext } from "../../Context";
import "./CreateTodoButtom.css";

function CreateTodoButtom() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const [disabled, setDisabled] = useState(false);

  const disabledB = () => {
    setOpenModal(!openModal);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 600);
  };

  return (
    <div className="CreateTodoButtom">
      <button
        className={"CreateTodoButtom-button" + (openModal ? " close-button" : "")}
        onClick={() => disabledB()}
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButtom };
