import React from 'react';
import './App.css';
import HeadBar from './components/headbar.jsx';
import Resume from './components/resume.jsx';
import HomePage from './components/homepage.jsx';
import Portfolio from './components/portfolio.jsx';
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <HeadBar/>
      <header className="App-header">
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
      </header>
    </div>
  );
}

export default App;
