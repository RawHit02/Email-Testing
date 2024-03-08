import React, { createContext, useContext,useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setAuthenticated(bool);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
