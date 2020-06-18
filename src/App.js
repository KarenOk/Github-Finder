import React, { Fragment, useState, useEffect, useContext } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubContext from "./context/github/githubContext";

const App = () => {
  const { getUsers } = useContext(GithubContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={User} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
