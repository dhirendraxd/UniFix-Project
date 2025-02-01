// src/components/IssueCard.tsx
import React, { useState } from 'react';
import IssueStatus from '@/components/ui/IssuesStatus';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatDate, calculateTimeTaken } from '@/mockdata';

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'text-green-500';
      case 'In Progress':
        return 'text-yellow-500';
      case 'Pending':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className={`issue-card p-4 mb-4 rounded-lg shadow-lg bg-white/80 backdrop-blur-md border border-white/30`}>
      <h2 className="text-xl font-bold text-foreground mb-2">{issue.title}</h2>
      <p className="text-foreground mb-2">Category: {issue.category}</p>
      <p className={`text-foreground mb-2 ${getPriorityColor(issue.priority)}`}>Priority: {issue.priority}</p>
      <IssueStatus status={issue.status} />
      <p className="text-foreground mb-2">Date Reported: {formatDate(issue.dateReported)}</p>
      {issue.dateResolved && (
        <p className="text-foreground mb-2">
          Time Taken: {calculateTimeTaken(issue.dateReported, issue.dateResolved)} days
        </p>
      )}
      <div className="progress-bar bg-gray-200 rounded-full h-2 mb-4">
        <div className="progress-bar-fill bg-primary h-2 rounded-full" style={{ width: `${issue.progress}%` }}></div>
      </div>
      {issue.estimatedResolutionTime && <p className="text-foreground mb-2">Estimated Resolution: {issue.estimatedResolutionTime}</p>}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`text-white p-2 rounded mb-4 ${isExpanded ? 'bg-red-500' : 'bg-primary'}`}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      {isExpanded && (
        <div className="issue-details text-foreground">
          <p className="mb-2">{issue.description}</p>
          {issue.photos && issue.photos.length > 0 && (
            <div className="photos grid grid-cols-2 gap-4 mb-4">
              {issue.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} className="rounded-lg" />
              ))}
            </div>
          )}
          {issue.location && (
            <div className="map mb-4">
              {/* Implement map display here */}
              <p>Location: {issue.location.lat}, {issue.location.lng}</p>
            </div>
          )}
          {issue.assignedTeam && <p className="mb-4">Assigned Team: {issue.assignedTeam}</p>}
          {issue.comments && issue.comments.length > 0 && (
            <div className="comments mb-4">
              {issue.comments.map((comment, index) => (
                <p key={index} className="mb-2">{comment}</p>
              ))}
            </div>
          )}
          {issue.statusUpdates && issue.statusUpdates.length > 0 && (
            <div className="status-updates mb-4">
              <h3 className="text-lg font-bold mb-2">Status Updates</h3>
              {issue.statusUpdates.map((update, index) => (
                <div key={index} className="status-update bg-gray-100 border border-gray-200 rounded-lg p-2 mb-2">
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
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <Button onClick={handleAddComment} className="mr-2 w-full p-2 bg-primary text-white rounded">Add Comment</Button>
          <Button onClick={handleRequestUpdate} className="w-full p-2 bg-primary text-white rounded">Request Update</Button>
        </div>
      )}
    </div>
  );
};

export default IssueCard;
