
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { logInWithEmail, signUpWithEmail } from '@/integrations/firebase/auth';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
        toast({
          title: "Account created successfully!",
          description: "Please log in with your new account.",
        });
        setIsSignUp(false);
      } else {
        await logInWithEmail(email, password);
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
        <h1 className="text-3xl font-bold mb-6 text-foreground text-center">
          {isSignUp ? "Create Account" : "Login"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : (isSignUp ? "Sign Up" : "Login")}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
