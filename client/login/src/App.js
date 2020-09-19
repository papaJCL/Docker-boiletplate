import React, { Fragment, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions";

function App() {

  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged);


  const checkAuthenticated = async(e) => {
    try{
      const res = await fetch("/auth/verify", {
        method: "GET",
        headers: { jwtToken: localStorage.token }
      });
      const parseRes = await res.json();

      parseRes === true ? dispatch(auth(true)) : dispatch(auth(false));

    }
    catch(err){
      console.error(err)
    }

  }

  useEffect(() => {
    checkAuthenticated();
  }, []);


  return (
       <Router>
          <Switch>
          <Route
            exact
            path="/"
            render={props =>
              !isLogged ? (
                <Login {...props}  />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
            <Route
              exact
              path="/login"
              render={props =>
                !isLogged ? (
                  <Login {...props} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isLogged ? (
                  <Register {...props} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={props =>
                isLogged ? (
                  <Dashboard {...props}/>
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
      </Router>
  );
}

export default App;
