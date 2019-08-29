import React from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


import Home from './../containers/Home/home';
import User from './../containers/Home/user';
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user" exact component={User}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;