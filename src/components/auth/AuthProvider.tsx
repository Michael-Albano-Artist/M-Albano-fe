import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getVerify, postLogin, postSignup } from '../../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    postSignup(email, password)
    .then(user => setCurrentUser(user))
    .finally(() => setLoading(false)); 
  };

  const login = (email: string, password: string)  => {
    postLogin(email, password)
      .then(user => setCurrentUser(user))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getVerify()
      .then(user => setCurrentUser(user))
      .finally(() => setLoading(false));
  }, []);

  const authState = {
    currentUser,
    loading,
    signup,
    login
  };

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
