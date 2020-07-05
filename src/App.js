import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact={true} path="/" component={Dashboard} />
          <ProtectedRoute path="/settings" component={Settings} />
          <ProtectedRoute component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
