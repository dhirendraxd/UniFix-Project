// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Simulate login by setting the login state
    setIsLoggedIn(true);
    navigate('/', { state: { isLoggedIn: true } });
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-primary hover:text-primary/80"
        onClick={handleBackClick}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
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
