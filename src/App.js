import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";
import Login from "./Login";
import {useStateValue} from './StateProvider';

function App() {
  const [{ user }, dispatch ] = useStateValue();
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__header">
              <Header />
            </div>

            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomID">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="app__heading">
                    <h1> Welcome to slack</h1>
                    <h3>
                      select a channel <br /> to start messaging...
                    </h3>
                    <h4>
                      <KeyboardReturnIcon />
                    </h4>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
