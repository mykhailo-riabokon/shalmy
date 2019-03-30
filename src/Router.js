import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recommendations from "./pages/Recommendations";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/recommendations" component={Recommendations} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
