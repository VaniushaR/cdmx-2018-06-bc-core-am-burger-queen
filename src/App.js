import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Kitchen from './Components/Kitchen';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Error from './Components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Kitchen" component={Kitchen} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//
