// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import ReportIssue from './pages/ReportIssue';
import TrackIssues from './pages/TractYourIssues';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import ClerkWrapper from './lib/clerkConfig';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
export default function App() {
  return (
    <ClerkWrapper>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/track-issues" element={<TrackIssues />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-in/*" element={<Login />} />
            <Route path="/sign-up/*" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ClerkWrapper>
  );
};

export default App;