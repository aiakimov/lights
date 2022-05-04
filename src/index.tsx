import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Lights from "./Lights";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Lights amount={150} maxSize={20} />
  </React.StrictMode>
);
