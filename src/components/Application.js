import React, { useState, useContext, Component } from "react";
// import { Router } from "@reach/router";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import { UserContext } from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Dashboard from "./Dashboard";
import { DataContext } from "../Context/DataContext";

class Application extends Component {
  // static contextType = DataContext;
  state = {
    email: "",
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/signUp"} component={SignUp} />
            <Route exact path={"/signIn"} component={SignIn} />
            <Route exact path={"/passwordReset"} component={PasswordReset} />
            <Route exact path={"/quiz"} component={Quiz} />
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Application;
