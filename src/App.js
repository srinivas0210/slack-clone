import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="app">
      <Router>
        <h1>Hey am here to immitate the slack application out here!!</h1>

        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/room/:roomID">
              <h1>this screen</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
