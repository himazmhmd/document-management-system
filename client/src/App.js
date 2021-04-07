import React from "react";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";

import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default App;
