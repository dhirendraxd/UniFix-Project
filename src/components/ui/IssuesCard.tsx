// src/components/IssueCard.tsx
import React, { useState } from 'react';
import IssueStatus from '@/components/ui/IssuesStatus';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

interface IssueCardProps {
  issue: Issue;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    // Implement adding comment logic here
    console.log('Adding comment:', comment);
  };

  const handleRequestUpdate = () => {
    // Implement request update logic here
    console.log('Requesting update for issue:', issue.id);
  };

  return (
    <div className="issue-card">
      <h2>{issue.title}</h2>
      <p>Category: {issue.category}</p>
      <p>Priority: {issue.priority}</p>
      <IssueStatus status={issue.status} />
      <p>Date Reported: {issue.dateReported}</p>
      <div className="progress-bar" style={{ width: `${issue.progress}%` }}></div>
      {issue.estimatedResolutionTime && <p>Estimated Resolution: {issue.estimatedResolutionTime}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      {isExpanded && (
        <div className="issue-details">
          <p>{issue.description}</p>
          {issue.photos && issue.photos.length > 0 && (
            <div className="photos">
              {issue.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} />
              ))}
            </div>
          )}
          {issue.location && (
            <div className="map">
              {/* Implement map display here */}
              <p>Location: {issue.location.lat}, {issue.location.lng}</p>
            </div>
          )}
          {issue.assignedTeam && <p>Assigned Team: {issue.assignedTeam}</p>}
          {issue.comments && issue.comments.length > 0 && (
            <div className="comments">
              {issue.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          )}
          {issue.statusUpdates && issue.statusUpdates.length > 0 && (
            <div className="status-updates">
              <h3>Status Updates</h3>
              {issue.statusUpdates.map((update, index) => (
                <div key={index} className="status-update">
                  <p>{update.date}: {update.status}</p>
                </div>
              ))}
            </div>
          )}
          <Input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleAddComment}>Add Comment</Button>
          <Button onClick={handleRequestUpdate}>Request Update</Button>
        </div>
      )}
    </div>
  );
};

export default IssueCard;
