import React from 'react';
import './App.css';
import HeadBar from './components/headbar.jsx';
import About from './components/about.jsx';
import HomePage from './components/homepage.jsx';
import Projects from './components/projects.jsx';

import ProjectDetails from './components/shared/projectDetails.jsx';
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
            <Route path="/projects" component={Projects}/>
            <Route path="/projects/projectDetails" component={ProjectDetails}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
