// External dependencies
import React from 'react';
import { Switch, Route, HashRouter, BrowserRouter, Redirect } from 'react-router-dom';
import * as actions from '../state/auth/actions'

// Internal dependencies
// import { NotFound } from 'pages/error';
// import { Main, ValidRegister } from '../pages';
import Auth from '../features/auth/containers/Auth';
import Home from 'features/home/containers/Home';
import { DrawerMenu } from 'ui/components';

function RouteWrapper({
  redirectTo, isPrivate, component: Component, ...rest
}) {
  const authenticated = localStorage.getItem('@allFitnessToken');

  if (!authenticated && isPrivate) {
    actions.signout();
    return <Redirect to={'/'} />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
}

const Root = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper exact path="/" component={Auth} />
      <DrawerMenu>
        <RouteWrapper exact path="/home" component={Home} isPrivate/>
      </DrawerMenu>
    </Switch>
  </HashRouter>
);

export default Root;
