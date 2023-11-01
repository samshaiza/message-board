import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/styles.scss";
import MessageContextProvider from "./contexts/MessageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </React.StrictMode>
);
