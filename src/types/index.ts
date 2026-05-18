export type Role = 'Admin' | 'Recruiter' | 'Hiring Manager' | 'Interviewer';

export type StageId =
  | 'sourced'
  | 'applied'
  | 'screen'
  | 'interview'
  | 'offer'
  | 'hired'
  | 'rejected';

export type Stage = {
  id: StageId;
  name: string;
  color: string;
};

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  status: 'Open' | 'Draft' | 'Closed' | 'On Hold';
  applicants: number;
  hiringManager: string;
  postedDate: string;
  description?: string;
};

export type Candidate = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone?: string;
  jobId: string;
  jobTitle: string;
  stage: StageId;
  rating: number; // 1-5
  matchScore: number; // 0-100
  source: string;
  appliedDate: string;
  location: string;
  skills: string[];
  experience: number; // years
  resumeUrl?: string;
  aiSummary?: string;
  tags?: string[];
};

export type Interview = {
  id: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  type: 'Phone Screen' | 'Technical' | 'Onsite' | 'Culture Fit' | 'Final';
  date: string; // ISO
  duration: number; // minutes
  interviewers: string[];
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  meetLink?: string;
};

export type Task = {
  id: string;
  title: string;
  due: string;
  assignee: string;
  priority: 'High' | 'Medium' | 'Low';
  done: boolean;
  relatedTo?: string;
};

export type ActivityItem = {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  type: 'success' | 'warning' | 'info' | 'error';
};

export type StatCard = {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  gradient: string;
  icon: string;
};

export type ChartDataPoint = {
  label: string;
  value: number;
  secondaryValue?: number;
};

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  status: 'active' | 'inactive' | 'pending';
  joined: string;
};

export type Integration = {
  id: string;
  name: string;
  description: string;
  connected: boolean;
  icon: string;
  category: 'Google Workspace' | 'AI' | 'Communication' | 'Storage';
};
