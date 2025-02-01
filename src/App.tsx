import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import ReportIssue from './pages/ReportIssue';
import TrackYourIssues from './pages/TractYourIssues';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/track-issues" element={<TrackYourIssues />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
