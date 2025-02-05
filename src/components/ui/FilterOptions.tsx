import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FilterOptions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching with filters:', searchTerm, statusFilter, priorityFilter, categoryFilter, dateRange);
  };

  return (
    <div className="filter-options p-6 bg-white border border-gray-200 rounded-lg mb-4 shadow-md">
      <Input
        type="text"
        placeholder="Search by Title or Category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Filter by Status</option>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Filter by Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Filter by Category</option>
        <option value="maintenance">Maintenance</option>
        <option value="safety">Safety</option>
        <option value="facilities">Facilities</option>
        <option value="technology">Technology</option>
        <option value="other">Other</option>
      </select>
      <Input
        type="date"
        placeholder="Start Date"
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <Input
        type="date"
        placeholder="End Date"
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <Button onClick={handleSearch} className="w-full p-2 bg-blue-500 text-white rounded">
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterOptions;
