import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import DeckProvider from './context/AppContext';

import App from "./App";

function Root() {
  return (
    <DeckProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DeckProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
