import React, { useState, useContext, Component } from "react";
// import { Router } from "@reach/router";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import Context from "./Context";
// import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    email: "",
  };

  handleSetEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          email: this.state.email,
          handleSetEmail: this.handleSetEmail,
        }}
      >
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(routeProps) => {
                return (
                  <LandingPage
                    handleSetEmail={this.handleSetEmail}
                    {...routeProps}
                  />
                );
              }}
            />
            <Route
            path={"/quiz"}
            render={(routeProps) => {
              return (
                <Quiz handleSetEmail={this.handleSetEmail} {...routeProps} />
              );
            }}
          />
          <Route path={"/dashboard"} component={Dashboard} /> 
            {/* <Route path={"/signUp"} component={SignUp} />
            <Route path={"/signIn"} component={SignIn} />
            <Route path={"/passwordReset"} component={PasswordReset} />
            */}
          </Switch>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
