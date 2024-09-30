'use client';

import axiosInstance from '@/utils/axiosInstance';
import { ReactNode, createContext, useEffect, useState, useContext } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      axiosInstance.get('/profile').then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}
