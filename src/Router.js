import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recommendations from "./pages/Recommendations";
import RecommendationDetails from "./pages/Recommendations/pages/Details";
import Exercises from "./pages/Exercises";
import Backoffice from "./pages/Backoffice";
import Onboarding from "./pages/Onboarding";
import BaseLayout from "./layouts/BaseLayout";

const withBaseLayout = Cmp => props => {
  return (
    <BaseLayout {...props}>
      <Cmp {...props} />
    </BaseLayout>
  );
};

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/recommendations"
            render={withBaseLayout(Recommendations)}
          />
          <Route
            exact
            path="/recommendations/:id"
            render={withBaseLayout(RecommendationDetails)}
          />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route exact path="/exercises" component={Exercises} />
          <Route path="/" render={withBaseLayout(Onboarding)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
