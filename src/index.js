import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";

import "./styles.css";

function App() {

  return (
    <div className="App">
      <div className="Login" id="Box">
        <input placeholder="Login" type="text" id="input" />
        <br />
        <input placeholder="Senha" type="password" id="input" />
        <br />
        <button type="button" class="btn btn-dark">
          Dark
        </button>
        <br />
        <a href="/" class="nounderline">
          Esqueci a Senha
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
