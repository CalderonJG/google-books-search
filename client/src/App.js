import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Save from "./pages/Save";
import Search from "./pages/Search";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Save} />
          </Switch>
        </div>
      </Router>
    );
  }
}
