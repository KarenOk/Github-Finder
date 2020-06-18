import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from './components/users/User';
import GithubContext from "./context/github/githubContext";
import NotFound from "./components/pages/NotFound";

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
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
