import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import Chat from '../Pages/Chat';
import IndividualChat from '../Pages/Chat/IndividualChat';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/signup" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} />

      <Route exact path="/chat" component={Chat} />

      <Route exact path="/chat/:person" component={IndividualChat} />
    </Switch>
  </Router>
);

export default Routes;
