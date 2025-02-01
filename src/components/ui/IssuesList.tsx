// src/components/IssueList.tsx
import React from 'react';
import IssueStatus from './IssuesStatus'; // Ensure this path is correct

interface Issue {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  const viewDetails = (issueId: string) => {
    // Implement navigation to issue details page
    console.log(`View details for issue ${issueId}`);
  };

  return (
    <div>
      {issues.map(issue => (
        <div key={issue.id} className="issue-item">
          <h2>{issue.title}</h2>
          <p>{issue.description}</p>
          <IssueStatus status={issue.status} />
          <button onClick={() => viewDetails(issue.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default IssueList;
