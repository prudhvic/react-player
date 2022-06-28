import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MusicContextProvider from "./context/MusicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MusicContextProvider>
      <App />
    </MusicContextProvider>
  </React.StrictMode>
);
