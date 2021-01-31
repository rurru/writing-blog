import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from '../firebase';

import Login from '../components/Login';
import MenuBar from '../components/Header/MenuBar';
import Dashboard from '../components/Dashboard';
import EntryList from '../components/Post/EntryList';
import withAuthentication from '../containers/withAuthentication';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id = "app">
        <div id = "header" />
        <MenuBar>
        <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" component={withAuthentication(Dashboard)} />
            </Switch>
          </Router>
        </MenuBar>
        <EntryList />
      </div>
    );
  }
}

export default App;