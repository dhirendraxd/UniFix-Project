import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, Bell } from 'lucide-react';

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
  showActions?: boolean; // New prop to control the visibility of actions
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, showActions = true }) => {
  return (
    <Card className="bg-primary/10 mb-4">
      <CardHeader>
        <CardTitle>{issue.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{issue.description}</p>
        <p className="text-muted-foreground">Category: {issue.category}</p>
        <p className="text-muted-foreground">Status: {issue.status}</p>
        <p className="text-muted-foreground">Priority: {issue.priority}</p>
        <p className="text-muted-foreground">Date Reported: {issue.dateReported}</p>
        {issue.dateResolved && <p className="text-muted-foreground">Date Resolved: {issue.dateResolved}</p>}
        <p className="text-muted-foreground">Progress: {issue.progress}%</p>
        {showActions && (
          <div className="mt-4 space-x-2">
            <Button variant="outline">Add Comment</Button>
            <Button variant="outline">Get Update</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IssueCard;
