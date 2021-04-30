import React from "react";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Leave from "./components/Leave";
import NonAcademicDutyLeave from "./components/NonAcademicDutyLeave";
import TravelClaim from "./components/TravelClaim";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Notification from "./components/Notification";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/header" component={Header} />
        <Route path="/home" component={Home} />
        <Route
          path="/non-academic-duty-leave"
          component={NonAcademicDutyLeave}
        />
        <Route path="/travel-claim" component={TravelClaim} />
        <Route path="/leave/:id" component={Leave} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/edit-profile/:id" component={EditProfile} />

        <Route path="/notification" component={Notification} />
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
