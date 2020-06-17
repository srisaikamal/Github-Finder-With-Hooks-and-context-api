import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/Pages/Home";
import User from "./components/users/User";
import Alert from "./components/layout/Alert.js";
import About from "./components/Pages/About.js";
import Notfound from "./components/Pages/Notfound";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alerts/AlertState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />

            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/about" component={About} />

                <Route path="/user/:login" component={User} />
                <Router exact component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
