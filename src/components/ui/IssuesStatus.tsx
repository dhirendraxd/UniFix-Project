// src/components/IssueStatus.tsx
import React from 'react';

interface IssueStatusProps {
  status: string;
}

const IssueStatus: React.FC<IssueStatusProps> = ({ status }) => {
  return (
    <div className={`issue-status ${status.toLowerCase()}`}>
      {status}
    </div>
  );
};

export default IssueStatus;
