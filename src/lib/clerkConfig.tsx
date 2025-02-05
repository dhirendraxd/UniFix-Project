// src/lib/clerkConfig.ts
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

// Get the Clerk Publishable Key from environment variables
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkFrontendApi) {
  throw new Error("Clerk publishable key is missing. Set VITE_CLERK_PUBLISHABLE_KEY in your .env file.");
}

interface ClerkWrapperProps {
  children: React.ReactNode;
}

const ClerkWrapper: React.FC<ClerkWrapperProps> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      {children}
    </ClerkProvider>
  );
};

export default ClerkWrapper;
