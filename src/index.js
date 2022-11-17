import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./components/App";
import { TodoProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
