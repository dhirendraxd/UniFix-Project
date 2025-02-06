// src/mockData.ts
import { formatDistanceToNow, differenceInDays } from 'date-fns';

export const mockIssues = [
  {
    id: '1',
    title: 'Broken Light in Room 101',
    description: 'The light in Room 101 is not working.',
    status: 'In Progress',
    priority: 'High',
    category: 'Maintenance',
    dateReported: '2023-10-01',
    progress: 75,
    estimatedResolutionTime: '2023-10-05',
    photos: ['photo1.jpg', 'photo2.jpg'],
    location: { lat: 40.7128, lng: -74.0060 },
    assignedTeam: 'Maintenance Team',
    comments: ['Working on it.', 'Parts ordered.'],
    statusUpdates: [
      { date: '2023-10-01', status: 'Reported' },
      { date: '2023-10-02', status: 'In Progress' },
    ],
  },
  {
    id: '2',
    title: 'Wi-Fi Issue in Library',
    description: 'The Wi-Fi in the library is slow.',
    status: 'Pending',
    priority: 'Medium',
    category: 'Technology',
    dateReported: '2023-09-25',
    progress: 25,
    estimatedResolutionTime: '2023-10-10',
    photos: ['photo3.jpg'],
    location: { lat: 40.7128, lng: -74.0060 },
    assignedTeam: 'IT Team',
    comments: ['Investigating the issue.'],
    statusUpdates: [
      { date: '2023-09-25', status: 'Reported' },
    ],
  },
  // Add mock data for resolved issues
  {
    id: '3',
    title: 'Leaky Faucet in Bathroom',
    description: 'The faucet in the bathroom on the second floor is leaking.',
    status: 'Resolved',
    priority: 'High',
    category: 'Maintenance',
    dateReported: '2023-09-15',
    dateResolved: '2023-09-20',
    progress: 100,
    estimatedResolutionTime: '2023-09-20',
    photos: ['photo4.jpg'],
    location: { lat: 40.7128, lng: -74.0060 },
    assignedTeam: 'Maintenance Team',
    comments: ['Fixed the leak.', 'Verified no further issues.'],
    statusUpdates: [
      { date: '2023-09-15', status: 'Reported' },
      { date: '2023-09-16', status: 'In Progress' },
      { date: '2023-09-20', status: 'Resolved' },
    ],
  },
  {
    id: '4',
    title: 'Broken Chair in Classroom',
    description: 'The chair in classroom 301 is broken.',
    status: 'Resolved',
    priority: 'Medium',
    category: 'Facilities',
    dateReported: '2023-09-10',
    dateResolved: '2023-09-15',
    progress: 100,
    estimatedResolutionTime: '2023-09-15',
    photos: ['photo5.jpg'],
    location: { lat: 40.7128, lng: -74.0060 },
    assignedTeam: 'Facilities Team',
    comments: ['Replaced the chair.', 'Verified no further issues.'],
    statusUpdates: [
      { date: '2023-09-10', status: 'Reported' },
      { date: '2023-09-12', status: 'In Progress' },
      { date: '2023-09-15', status: 'Resolved' },
    ],
  },
];

export const formatDate = (date: string) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const calculateTimeTaken = (dateReported: string, dateResolved: string) => {
  return differenceInDays(new Date(dateResolved), new Date(dateReported));
};
