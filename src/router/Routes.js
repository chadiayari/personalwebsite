import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeVideoLight from "../views/all-home-version/HomeVideoLight";
import HomeVideoDark from "../views/all-home-version/HomeVideoDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Preview} />
          <Route path="/home-light" component={HomeLight} />
          <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route path="/home-dark-animation" component={HomeDarkAnimation} />
          <Route path="/home-dark" component={HomeDark} />
          <Route path="/home-video-light" component={HomeVideoLight} />
          <Route path="/home-video-dark" component={HomeVideoDark} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
