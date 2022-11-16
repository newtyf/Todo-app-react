import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children, name }) {
  return createPortal(
    <div className={"modalBackground " + name}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
