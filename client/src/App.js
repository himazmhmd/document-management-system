import React from "react";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <Switch>
      <CssBaseline />
      <Route exact path="/" component={Login} />
    </Switch>
  );
};

export default App;
