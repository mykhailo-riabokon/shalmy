import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recommendations from "./pages/Recommendations";
import Backoffice from "./pages/Backoffice";
import Onboarding from "./pages/Onboarding";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/recommendations" component={Recommendations} />
          <Route path="/backoffice" component={Backoffice} />
          <Route path="/" component={Onboarding} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;