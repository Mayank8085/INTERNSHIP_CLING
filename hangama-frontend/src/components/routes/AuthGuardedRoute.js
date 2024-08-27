import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { checkAuth, logout } from '../../store/authSlice';

const Error = React.memo(({ message }) => {
    return (
      <p className="error-block" style={{ color: 'red' }}>
        {message}
      </p>
    );
  });

  function Loading() {
    return <p>Loading...</p>;
  }

export function AuthGuardedRoute({ children, ...rest }) {
  const { isLoading,isLoggedIn, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {error && <Error message={error.message} />}
      <Route {...rest} render={({ location }) => renderRoutedComponent(location)} />
    </>
  );

  function renderRoutedComponent(location) {
    const isLoginPagePathname = location.pathname.includes('login');

    if (isLoggedIn) {
      if (isLoginPagePathname) {
        const { from } = location.state || { from: { pathname: '/' } };

        return (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from },
            }}
          />
        );
      }

      return (
        <>
          {children}
          <button
            onClick={async () => {
              dispatch(logout());
              history.push('/');
            }}
          >
            Log Out
          </button>
        </>
      );
    } else {
      if (isLoginPagePathname) {
        return children;
      }

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      );
    }
  }
}