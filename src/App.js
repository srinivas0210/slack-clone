import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/room/:roomID">
                <Chat  />
              </Route>
              <Route path="/">
                <h1>welcome</h1>
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
