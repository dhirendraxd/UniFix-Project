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
  dateResolved?: string;
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
  const activeIssues = issues.filter(issue => issue.status !== 'Resolved');
  const resolvedIssues = issues.filter(issue => issue.status === 'Resolved');

  return (
    <div className="issue-list p-6">
      <h2 className="text-2xl font-bold text-foreground mb-4">Active Issues</h2>
      {activeIssues.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
      <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Resolved Issues</h2>
      {resolvedIssues.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
