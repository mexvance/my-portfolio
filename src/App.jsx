import React from 'react';
import './App.css';
import HeadBar from './components/headbar.jsx';
import About from './components/about.jsx';
import HomePage from './components/homepage.jsx';
import Projects from './components/projects.jsx';
import ProjectRoutingComponent from './ProjectRoutingComponent.jsx';

import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    
      <HeadBar/>
      <div className="App-body">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <ProjectRoutingComponent/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
