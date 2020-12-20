import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Entry from '../components/Post/Entry';
import withAuthentication from '../containers/withAuthentication';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id = "app">
        <div id = "header" />
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          </Switch>
        </Router>
        <Entry />
      </div>
    );
  }
}

export default App;