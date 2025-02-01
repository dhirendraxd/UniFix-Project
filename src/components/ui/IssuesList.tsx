// src/components/IssueList.tsx
import React from 'react';
import IssueCard from '@/components/ui/IssuesCard';

interface Issue {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  dateReported: string;
  progress: number;
  estimatedResolutionTime?: string;
  photos?: string[];
  location?: { lat: number; lng: number };
  assignedTeam?: string;
  comments?: string[];
  statusUpdates?: { date: string; status: string }[];
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  const resolvedIssues = issues.filter(issue => issue.status === 'resolved');

  return (
    <div className="issue-list">
      <h2>Active Issues</h2>
      {issues.filter(issue => issue.status !== 'resolved').map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
      <h2>Resolved Issues</h2>
      {resolvedIssues.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
