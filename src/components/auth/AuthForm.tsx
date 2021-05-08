import React, { useState } from 'react';
import { useLogin, useSignup } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './Auth.css';

type Props = {
  newUser: boolean;
}

const AuthForm: React.FC<Props> = ({ newUser }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = useLogin();
  const signUp = useSignup();
  const history = useHistory();

  const handleLogin = async(e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(email, password)
    await login(email, password);
    history.push('/admin')
  }

  const handleSignup = async(e: React.ChangeEvent<any>) => {
    e.preventDefault();
    await signUp(email, password);
    history.push('/admin');
  }

  return (
    <div className='auth-form-outer' >
      <form onSubmit={newUser ? handleSignup : handleLogin}>
        {newUser &&
        <h1>Sign Up</h1>
        }
        {!newUser &&
        <h1>Login</h1>
        }
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input 
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AuthForm
