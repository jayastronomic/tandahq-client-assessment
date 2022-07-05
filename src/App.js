import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      authUser: { name: "" },
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
          this.setState({
            authUser: {},
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProfileWrapper
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
            <Route path="/:organization" element={<Organization />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
