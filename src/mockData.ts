// src/mockData.ts
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
    // Add more mock issues as needed
  ];
  