import React from "react";
import "./App.scss";
import HeadBar from "./components/headbar.jsx";
import About from "./components/about.jsx";
import HomePage from "./components/homepage.jsx";
import Projects from "./components/projects.jsx";
import ProjectRoutingComponent from "./ProjectRoutingComponent.jsx";

import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <div>
            <Route path="/about" component={About} />
            <HeadBar />
            <Route exact path="/projects" component={Projects} />
            <ProjectRoutingComponent />
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
