import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, User, Trophy, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import IssueList from '@/components/ui/IssuesList';
import FilterOptions from '@/components/ui/FilterOptions';
import { db } from '@/lib/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Mock user data
const user = {
  name: "John Doe",
  profilePicture: "https://th.bing.com/th/id/OIP.nUeiK1UGfKNlCEIwHdjRCAHaFj?rs=1&pid=ImgDetMain", // Replace with actual profile picture URL
  points: 150,
  badges: ['Beginner', 'Intermediate'],
};

// Mock issues data
const mockIssues = [
  { id: "1", title: "Broken Chair", description: "The chair in room 101 is broken.", category: "Maintenance", status: "Active", priority: "High", dateReported: "2023-10-01", progress: 50 },
  { id: "2", title: "Leaking Faucet", description: "The faucet in the bathroom is leaking.", category: "Maintenance", status: "Resolved", priority: "Medium", dateReported: "2023-09-25", dateResolved: "2023-09-28", progress: 100 },
  { id: "3", title: "Wi-Fi Issue", description: "The Wi-Fi in the library is not working.", category: "Technology", status: "Active", priority: "High", dateReported: "2023-10-02", progress: 30 },
  { id: "4", title: "Noisy AC", description: "The AC in room 202 is making noise.", category: "Maintenance", status: "Resolved", priority: "Low", dateReported: "2023-09-30", dateResolved: "2023-10-01", progress: 100 },
];

const Dashboard = () => {
  const [issues, setIssues] = useState(mockIssues);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newProfilePicture, setNewProfilePicture] = useState(user.profilePicture);
  const [profilePictureFile, setProfilePictureFile] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      const issuesCollection = collection(db, 'issues');
      const q = query(issuesCollection, where('userId', '==', 'user-id')); // Replace 'user-id' with the actual user ID
      const issuesSnapshot = await getDocs(q);
      const issuesList = issuesSnapshot.docs.map(doc => doc.data());
      setIssues(issuesList);
    };

    fetchIssues();
  }, []);

  const handleSaveProfile = () => {
    // Save the new name and profile picture to the database
    // For simplicity, we'll just update the mock user data here
    user.name = newName;
    user.profilePicture = newProfilePicture;
    setEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
      setProfilePictureFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Link to="/" className="absolute top-4 left-4 text-primary hover:text-primary/80">
        <ChevronLeft className="h-6 w-6" />
      </Link>

      {/* User Profile Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-primary/5 to-background flex items-center justify-center flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">User Dashboard</h1>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative">
              <img
                src={newProfilePicture}
                alt={user.name}
                className="h-24 w-24 rounded-full border-4 border-primary"
              />
              {editing && (
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="absolute top-0 left-0 opacity-0 h-24 w-24 cursor-pointer"
                />
              )}
            </div>
            {editing ? (
              <div className="flex items-center space-x-2">
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="font-semibold"
                />
                <Button onClick={handleSaveProfile}>Save</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <h2 className="text-3xl font-semibold">{user.name}</h2>
                <Button onClick={() => setEditing(true)}>Edit</Button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">{user.points} Points</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">{user.badges.length} Badges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="py-16 px-6 bg-background flex items-center justify-center flex-col">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Your Badges</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {user.badges.map((badge, index) => (
              <Card key={index} className="bg-primary/10">
                <CardHeader>
                  <CardTitle>{badge}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earned for your contributions and achievements.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Options Section */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <FilterOptions />
        </div>
      </section>

      {/* Posted Reports Section */}
      <section className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Your Reports</h2>
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

export default Dashboard;
