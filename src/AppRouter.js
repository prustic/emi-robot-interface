import React from "react";
import { Switch, Route } from "react-router-dom";
import useReactRouter from "use-react-router";
import YourData from "./pages/YourData";
import Calendar from "./pages/Calendar";
import Notifications from "./pages/Notifications";
import DailyTasks from "./pages/Tasks";

const { default: Home } = require("./pages/Home");
const { default: VideoCall } = require("./pages/VideoCall");

const AppRouter = () => {
  const { history, location, match } = useReactRouter();
  return (
    <Switch>
      <Route path="/call">
        <VideoCall />
      </Route>
      <Route path="/data">
        <YourData />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
      <Route path="/notifications">
        <Notifications />
      </Route>
      <Route path="/tasks">
        <DailyTasks />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default AppRouter;
