import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import Chat from '../Pages/Chat';
import IndividualChat from '../Pages/Chat/IndividualChat';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route exact path="/" component={Dashboard} isPrivate />
    <Route exact path="/chat" component={Chat} isPrivate />
    <Route path="/chat/:users" component={IndividualChat} isPrivate />
  </Switch>
);

export default Routes;
