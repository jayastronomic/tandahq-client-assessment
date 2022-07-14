import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  resolvePath,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import ProfileWrapper from "./components/ProfileWrapper";

const API = "http://localhost:3001/logged_in";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authUser: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.logged_in === true) {
          this.setState({
            authUser: resObj,
            isLoading: false,
          });
        } else {
          console.log(resObj);
          this.setState({
            authUser: {},
          });
        }
      })
      .catch((err) => console.log(err));
  };

  handleLogin = (authUser) => {
    console.log(authUser);
    this.setState({
      authUser,
      isLoading: false,
    });
  };

  handleLogout = () => {
    this.setState({
      authUser: {},
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProfileWrapper
                handleLogout={this.handleLogout}
                authUser={this.state.authUser}
                isLoading={this.state.isLoading}
              />
            }
          >
            <Route
              path="/"
              element={
                <Home
                  authUser={this.state.authUser}
                  isLoading={this.state.isLoading}
                />
              }
            />
            <Route
              path="/:organization"
              element={<Organization authUser={this.state.authUser} />}
            />
          </Route>
          <Route
            path="/login"
            element={<Login handleLogin={this.handleLogin} />}
          />
          <Route
            path="/signup"
            element={<Signup handleLogin={this.handleLogin} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
