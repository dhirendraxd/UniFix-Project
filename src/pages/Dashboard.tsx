// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

const Dashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.email));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }

        const activitiesQuery = query(collection(db, 'activities'), where('userId', '==', user.uid));
        const activitiesSnapshot = await getDocs(activitiesQuery);
        const activitiesList = activitiesSnapshot.docs.map(doc => doc.data());
        setActivities(activitiesList);
      }
    };

    fetchUserData();
  }, [user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground text-center">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <p><strong>Username:</strong> {userData.email}</p>
        <p><strong>College Name:</strong> {userData.collegeName || 'N/A'}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Activities</h2>
        {activities.length > 0 ? (
          <ul>
            {activities.map((activity, index) => (
              <li key={index} className="mb-4">
                <strong>Issue:</strong> {activity.issue}<br />
                <strong>Status:</strong> {activity.status}<br />
                <strong>Date:</strong> {new Date(activity.timestamp?.toDate()).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No activities found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
