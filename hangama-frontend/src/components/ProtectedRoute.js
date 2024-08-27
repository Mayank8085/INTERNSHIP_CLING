import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isLoggedIn } = useSelector(state => state.auth);
  return (
    <Route {...rest} render={
      props => {
        if (isLoggedIn) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;