import React, { createContext, useContext, useMemo, useState } from 'react';

import type { User } from '@/entities/user';
import { tokenStorage } from '@/shared/api';

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthUser: (user: User | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => tokenStorage.getUser());
  const [isLoading] = useState(false);

  const setAuthUser = (nextUser: User | null) => {
    setUser(nextUser);
    if (nextUser) tokenStorage.setUser(nextUser);
    else tokenStorage.clearUser();
  };

  const logout = () => {
    setUser(null);
    tokenStorage.clearAllAuth();
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      setAuthUser,
      logout,
    }),
    [user, isLoading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Не авторизирован');
  }
  return context;
}
