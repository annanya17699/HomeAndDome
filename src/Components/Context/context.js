import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  user:{},
  token:{},
  login: () => {},
  logout: () => {}
});