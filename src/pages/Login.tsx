// src/components/Login.tsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-md bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Login</h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
};

export default Login;
