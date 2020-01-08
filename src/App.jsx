import React from 'react';
import './App.css';
import HeadBar from './components/headbar.jsx';
import About from './components/about.jsx';
import HomePage from './components/homepage.jsx';
import Projects from './components/projects.jsx';
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <HeadBar/>
      <header className="App-header">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
