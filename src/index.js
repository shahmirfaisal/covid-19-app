import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ContextComponent } from "./store/context";
import axios from "axios";

axios.defaults.baseURL = "https://covid-19-rest-api.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextComponent>
        <App />
      </ContextComponent>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
