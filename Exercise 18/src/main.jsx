import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactProvider } from "./ContactContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
);