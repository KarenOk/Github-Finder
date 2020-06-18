import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

ReactDOM.render(
  <GithubState>
    <AlertState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertState>
  </GithubState>,
  document.getElementById("root")
);
