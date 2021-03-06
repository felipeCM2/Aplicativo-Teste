import React from 'react';
import { useAuth } from '../hooks/auth';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

interface RoutesProp extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType
}

// EhPrivado / Está Logado?
//true/true = OK
//true/false = Redirecionar ele pro login
//false/true = Redirecionar para o dashboard
//false/false = OK

const Route: React.FC<RoutesProp> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={( location ) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location }
          }}
          />
        );
      }}
    />
);
}

export default Route;
