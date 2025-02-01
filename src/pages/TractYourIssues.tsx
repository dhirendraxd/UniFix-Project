// src/pages/TrackYourIssues.tsx
import React, { useState } from 'react';
import IssueList from '@/components/ui/IssuesList';
import FilterOptions from '@/components/ui/FilterOptions';
import { mockIssues } from '@/mockdata'; // Import the mock data

const TrackYourIssues: React.FC = () => {
  const [issues, setIssues] = useState(mockIssues); // Use the mock data

  return (
    <div>
      <div className="page-header">
        <h1>Track Your Issues</h1>
        <p>Stay updated on the progress of your reported issues and know when they’re resolved.</p>
      </div>
      <FilterOptions />
      <IssueList issues={issues} />
      <div className="footer">
        <p>Need help? Contact us at <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Visit our <a href="/faq">FAQs</a> for quick guidance.</p>
      </div>
    </div>
  );
};

export default TrackYourIssues;
