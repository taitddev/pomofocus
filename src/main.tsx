import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormDataProvider from "./context/FormData";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </React.StrictMode>
);
