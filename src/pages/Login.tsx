// src/components/Login.tsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Link } from '@radix-ui/react-navigation-menu';
import { CheckCircle, FileText } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-md bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Login</h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        <Button onClick={handleLoginClick} className="mt-4 w-full">
          Login
        </Button>
        {/* Show "Report Your Issues" and "Track Your Issues" buttons after login */}
        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/report-issue">
              Report Your Issues <FileText className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/track-issue">
              Track Your Issues <CheckCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
