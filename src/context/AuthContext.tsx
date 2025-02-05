// src/context/AuthContext.ts
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth, db } from '../lib/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user); // Debugging statement
      setUser(user);
      setLoading(false); // Set loading to false after auth state is checked
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Re-throw the error to be caught in the component
    }
  };

  const signup = async (email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await setDoc(doc(db, 'users', email), {
      email,
      password: hashedPassword,
      // Add any other user data you want to store
    });
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking auth state
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
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
