// src/context/AuthContext.ts
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useClerk, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { db } from '../lib/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface ClerkUser {
  id: string;
  emailAddresses: { emailAddress: string }[];
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
}

interface AuthContextType {
  user: ClerkUser | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, signOut } = useClerk();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const storeUserData = async () => {
        await setDoc(doc(db, 'users', user.id), {
          email: user.emailAddresses[0].emailAddress,
          displayName: user.firstName + ' ' + user.lastName,
          photoURL: user.imageUrl,
          uid: user.id,
        });
      };
      storeUserData();
    }
    setLoading(false);
  }, [user]);

  const logout = async () => {
    await signOut();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
