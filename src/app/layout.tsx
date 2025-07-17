// src/app/layout.tsx
'use client'; // This directive is needed because we're using useState and createContext

import './globals.css';
import Header from '@/components/Header';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our AuthContext
interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: string | null;
  userRole: 'admin' | 'user' | null;
  login: (username: string, role: 'admin' | 'user') => void;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

  const login = (username: string, role: 'admin' | 'user') => {
    setIsLoggedIn(true);
    setCurrentUser(username);
    setUserRole(role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, currentUser, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// **ENSURE THIS ENTIRE METADATA BLOCK IS GONE**
/*
export const metadata = {
  title: 'My Career Blog',
  description: 'Explore insightful blogs on Cloud, DevOps, AI/ML, and Software Development.',
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}