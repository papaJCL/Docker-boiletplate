import React, { Fragment, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {

  const [isAuthenticated, setisAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setisAuthenticated(boolean);
  }

  const checkAuthenticated = async(e) => {
    try{
      const res = await fetch("/auth/verify", {
        method: "GET",
        headers: { jwtToken: localStorage.token }
      });
      const parseRes = await res.json();

      parseRes === true ? setisAuthenticated(true) : setisAuthenticated(false);

    }
    catch(err){
      console.error(err)
    }

  }

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
          <Route
            exact
            path="/"
            render={props =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
            <Route
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
