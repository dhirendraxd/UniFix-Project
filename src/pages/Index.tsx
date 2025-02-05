// src/components/Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Simulate login by setting a flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-md bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Login</h1>
        <Button onClick={handleLoginClick} className="mt-4 w-full">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
