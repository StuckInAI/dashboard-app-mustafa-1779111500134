import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DashboardPage from '@/pages/DashboardPage';
import JobsPage from '@/pages/JobsPage';
import CandidatesPage from '@/pages/CandidatesPage';
import PipelinePage from '@/pages/PipelinePage';
import InterviewsPage from '@/pages/InterviewsPage';
import TasksPage from '@/pages/TasksPage';
import AnalyticsPage from '@/pages/AnalyticsPage';
import IntegrationsPage from '@/pages/IntegrationsPage';
import SettingsPage from '@/pages/SettingsPage';
import { ATSProvider } from '@/context/ATSContext';

export default function App() {
  return (
    <ATSProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="candidates" element={<CandidatesPage />} />
            <Route path="pipeline" element={<PipelinePage />} />
            <Route path="interviews" element={<InterviewsPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ATSProvider>
  );
}
