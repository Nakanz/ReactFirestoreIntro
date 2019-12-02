import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
