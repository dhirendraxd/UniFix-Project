
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import ReportIssue from './pages/ReportIssue';
import TrackYourIssue from './pages/TractYourIssues';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ui/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/track-issue" element={<TrackYourIssue />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
