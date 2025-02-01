// src/pages/TrackYourIssues.tsx
import React, { useEffect, useState } from 'react';
import IssueList from '../components/ui/IssuesList'; // Ensure this path is correct
import { getUserIssues, subscribeToIssueUpdates } from '../components'; // Ensure this path is correct

const TrackYourIssues: React.FC = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const userIssues = await getUserIssues();
      setIssues(userIssues);
    };

    fetchIssues();

    const unsubscribe = subscribeToIssueUpdates((newIssue) => {
      setIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue.id === newIssue.id ? newIssue : issue
        )
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Track Your Issues</h1>
      <IssueList issues={issues} />
    </div>
  );
};

export default TrackYourIssues;
