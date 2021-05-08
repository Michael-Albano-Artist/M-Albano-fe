import React from 'react'
import { useAuthLoading, useCurrentUser } from '../../context/AuthContext'
import {Route, Redirect} from 'react-router-dom';
import Loading from '../loading/LoadingScreen';

const PrivateRoute = (props) => {
  const currentUser = useCurrentUser();
  const loading = useAuthLoading();
  if(loading) return <Loading />;
  if(!currentUser) return <Redirect to='/login' />;

  return <Route {...props} />
}

export default PrivateRoute;
