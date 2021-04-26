import { get, post } from "./request";

export const postSignup = (email, password) => 
  post('/signup', { email, password });

export const postLogin = (email, password) => 
  post('/login', { email, password })

  export const getVerify = () =>
    get('/verify');
