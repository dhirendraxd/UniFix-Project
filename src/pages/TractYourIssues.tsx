import React, { useState, useEffect } from 'react';
import IssueList from '@/components/ui/IssuesList';
import FilterOptions from '@/components/ui/FilterOptions';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, User } from "lucide-react";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// Mock user data
const user = {
  name: "John Doe",
  profilePicture: "https://th.bing.com/th/id/OIP.nUeiK1UGfKNlCEIwHdjRCAHaFj?rs=1&pid=ImgDetMain", // Replace with actual profile picture URL
  loginMethod: "", // or "Email"
};

const TrackYourIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesCollection = collection(db, 'issues');
      const issuesSnapshot = await getDocs(issuesCollection);
      const issuesList = issuesSnapshot.docs.map(doc => doc.data());
      setIssues(issuesList);
    };

    fetchIssues();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Link to="/" className="absolute top-4 left-4 text-primary hover:text-primary/80">
        <ChevronLeft className="h-6 w-6" />
      </Link>

      {/* User Dashboard Icon */}
      <Link to="/dashboard" className="absolute top-4 right-4 flex items-center space-x-2">
        <Button variant="outline" className="flex items-center space-x-2 p-2 bg-white rounded-full">
          <div className="relative">
            <User className="h-6 w-6 text-primary" />
            <img
              src={user.profilePicture}
              alt={user.name}
              className="h-6 w-6 rounded-full absolute top-0 left-0"
            />
          </div>
        </Button>
      </Link>

      {/* Page Header */}
      <section className="px-6 py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Track Your Issues</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated on the progress of your reported issues and know when they’re resolved.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <FilterOptions />
        </div>
      </section>

      {/* Issue List */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <IssueList issues={issues} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary/5 text-muted-foreground">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground">
                We're dedicated to making campus issue reporting and resolution simple and efficient.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-muted-foreground">
                Unixfix@edu.np<br />
                98624788xx - 98624788xx
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Campus Issue Reporting System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrackYourIssues;
