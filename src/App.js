import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import User from "./components/users/User";
import About from "./components/pages/About";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const res = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
  }, []);


  const searchUsers = async (searchString) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/search/users?q=${searchString}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);

  };

  // Get one user
  const getUser = async (username) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);

  };

  // Get a user's repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await Axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&type=all&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);

  };

  // Clear out users
  const clearUsers = () => setUsers([]);

  // Set app alert
  const handleAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    showClear={!!users.length}
                    clearUsers={clearUsers}
                    setAlert={handleAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  repos={repos}
                  loading={loading}
                  getUserRepos={getUserRepos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
