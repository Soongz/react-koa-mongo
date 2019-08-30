import React from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Home from '../containers/home/home';
import User from '../containers/home/user';
import Login from '../containers/home/login';
import ViewContent from "../containers/subject/contentFrame";
import AddTopic from "../containers/subject/addTopic";
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <e pat path="/user" exact component={User}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/content" exact component={ViewContent}/>
        <Route path="/content/addTopic" exact component={AddTopic}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;