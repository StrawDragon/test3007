import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectedList from "./pages/SelectedList";
import "../styles.css";
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/:id" component={SelectedList} />
  </Switch>
);

export default App;
