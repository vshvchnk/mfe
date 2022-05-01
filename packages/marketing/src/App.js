import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export default ({ history }) => {
  return <div>
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route exact path="/pricing" component={Pricing}></Route>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </StylesProvider>
    </Router>
  </div>
};