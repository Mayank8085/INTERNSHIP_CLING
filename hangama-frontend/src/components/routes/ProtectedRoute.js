import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../../store/authSlice';

export function ProtectedRoute({ component: Component, ...restOfProps }) {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error } = useSelector(state => state.auth);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export function AuthBlockedRoute({ component: Component, ...restOfProps }) {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error } = useSelector(state => state.auth);
  // useEffect(()=>{
  //     dispatch(checkAuth());
  //         },[dispatch])
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        // !isLoggedIn ? 
        <Component {...props} />
        // : <Redirect to="/" />
      }
    />
  );
}
