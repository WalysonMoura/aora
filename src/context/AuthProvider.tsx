import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ isLoading, isLogged, user, setIsLoading, setIsLogged, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
