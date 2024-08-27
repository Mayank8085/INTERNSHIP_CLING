import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

const NotProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoading, isLoggedIn } = useSelector(state => state.auth);
  return (
    <Route {...rest} render={
      props => {
        if (!isLoggedIn) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/dashboard',
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

export default NotProtectedRoute;