import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './shared/ui';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Payslip from '../containers/Payslip';

import NotFound from './NotFound';
import PrivateRoute from './shared/PrivateRoute';

import { LOGIN_URL } from '../utils/constants';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path={LOGIN_URL} component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/" exact component={Payslip} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
