import React from "react";
import ReactDom from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
