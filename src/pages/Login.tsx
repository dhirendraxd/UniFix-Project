import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { loginWithGoogle, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('Initiating Google login...');
      const result = await loginWithGoogle();
      console.log('Google login result:', result);

      // Check if the user is authenticated
      if (isAuthenticated()) {
        console.log('User is authenticated, navigating to home...');
        
      } else {
        console.error('User is not authenticated after Google login');
        alert('Failed to authenticate with Google. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
      alert('Error logging in with Google. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-md bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Login</h1>
        <Button onClick={handleLogin} className="w-full bg-primary text-white">
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;