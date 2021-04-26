import React, { useContext } from 'react';

interface AuthObj {
  signup: string;
  login: string;
  currentUser: string;
  loading: boolean;
}

export const AuthContext = React.createContext<AuthObj | any>(null);

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
}

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
}

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
}

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading
}
