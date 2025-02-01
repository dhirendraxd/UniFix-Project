// src/pages/TrackYourIssues.tsx
import React, { useState } from 'react';
import IssueList from '@/components/ui/IssuesList'; // Corrected import path
import FilterOptions from '@/components/ui/FilterOptions'; // Corrected import path
import { mockIssues } from '@/mockdata'; // Import the mock data

const TrackYourIssues: React.FC = () => {
  const [issues, setIssues] = useState(mockIssues); // Use the mock data

  return (
    <div>
      <div className="page-header">
        <h1>Track Your Issues</h1>
        <p>Stay updated on the progress of your reported issues and know when they'r resolved.</p>
      </div>
      <FilterOptions />
      <IssueList issues={issues} /> {/* Corrected prop name */}
      <div className="footer">
        <p>Need help? Contact us at <a href="mailto:support@example.com">support@example.com</a></p>
        <p>Visit our <a href="/faq">FAQs</a> for quick guidance.</p>
      </div>
    </div>
  );
};

export default TrackYourIssues;
