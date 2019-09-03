import React from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import User from '../containers/home/user';
import Register from '../containers/home/createUser';
import Login from '../containers/home/login';
import ViewContent from "../containers/subject/contentFrame";
import AddTopic from "../containers/subject/addTopic";
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/user" exact component={User}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/content" exact component={ViewContent}/>
        <Route path="/content/addTopic" exact component={AddTopic}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;