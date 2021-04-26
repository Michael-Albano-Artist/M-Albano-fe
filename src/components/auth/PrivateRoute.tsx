import React from 'react'
import { useAuthLoading, useCurrentUser } from '../../context/AuthContext'
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const currentUser = useCurrentUser();
  const loading = useAuthLoading();
  if(loading) return <h1>...Loading</h1>;
  if(!currentUser) return <Redirect to='/login' />;

  return <Route {...props} />
}

export default PrivateRoute;
