import React from "react";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/header" component={Header} />
        <Route path="/home" component={Home} />
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
