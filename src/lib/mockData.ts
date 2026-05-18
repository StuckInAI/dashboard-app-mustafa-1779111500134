import type {
  StatCard,
  ActivityItem,
  ChartDataPoint,
  Job,
  Candidate,
  Interview,
  Task,
  TeamMember,
  Stage,
  Integration,
} from '@/types';

export const stages: Stage[] = [
  { id: 'sourced', name: 'Sourced', color: '#9498b0' },
  { id: 'applied', name: 'Applied', color: '#4f8ef7' },
  { id: 'screen', name: 'Phone Screen', color: '#9b6ef7' },
  { id: 'interview', name: 'Interview', color: '#f79c4f' },
  { id: 'offer', name: 'Offer', color: '#3ecf8e' },
  { id: 'hired', name: 'Hired', color: '#3ecfce' },
  { id: 'rejected', name: 'Rejected', color: '#f75f5f' },
];

export const statCards: StatCard[] = [
  {
    id: '1',
    title: 'Open Positions',
    value: '42',
    change: 8.3,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-blue)',
    icon: 'briefcase',
  },
  {
    id: '2',
    title: 'Active Candidates',
    value: '1,284',
    change: 14.2,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-green)',
    icon: 'users',
  },
  {
    id: '3',
    title: 'Interviews This Week',
    value: '37',
    change: -2.1,
    changeLabel: 'vs last week',
    gradient: 'var(--gradient-purple)',
    icon: 'calendar',
  },
  {
    id: '4',
    title: 'Offers Extended',
    value: '12',
    change: 22.5,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-red)',
    icon: 'award',
  },
];

export const recentActivity: ActivityItem[] = [
  { id: '1', user: 'Sarah Park', avatar: 'SP', action: 'moved candidate to', target: 'Final Interview', time: '5 min ago', type: 'success' },
  { id: '2', user: 'AI Assistant', avatar: 'AI', action: 'parsed resume for', target: 'Marcus Liu', time: '12 min ago', type: 'info' },
  { id: '3', user: 'David Kim', avatar: 'DK', action: 'scheduled interview via', target: 'Google Calendar', time: '32 min ago', type: 'info' },
  { id: '4', user: 'Sarah Park', avatar: 'SP', action: 'sent offer letter to', target: 'Priya Shah', time: '1 hr ago', type: 'success' },
  { id: '5', user: 'Hiring Bot', avatar: 'HB', action: 'flagged top match for', target: 'Senior Engineer role', time: '2 hr ago', type: 'warning' },
  { id: '6', user: 'Alex Rivera', avatar: 'AR', action: 'left feedback for', target: 'Jordan Wells', time: '3 hr ago', type: 'info' },
];

export const jobs: Job[] = [
  { id: 'j1', title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote · US', type: 'Full-time', status: 'Open', applicants: 184, hiringManager: 'Sarah Park', postedDate: 'Oct 4, 2024' },
  { id: 'j2', title: 'Product Designer', department: 'Design', location: 'New York, NY', type: 'Full-time', status: 'Open', applicants: 92, hiringManager: 'David Kim', postedDate: 'Oct 12, 2024' },
  { id: 'j3', title: 'Backend Engineer (Node.js)', department: 'Engineering', location: 'Remote · EU', type: 'Full-time', status: 'Open', applicants: 156, hiringManager: 'Sarah Park', postedDate: 'Sep 28, 2024' },
  { id: 'j4', title: 'Engineering Manager', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time', status: 'On Hold', applicants: 41, hiringManager: 'Alex Rivera', postedDate: 'Sep 15, 2024' },
  { id: 'j5', title: 'Data Analyst', department: 'Data', location: 'Remote · Global', type: 'Full-time', status: 'Open', applicants: 73, hiringManager: 'Priya Shah', postedDate: 'Oct 18, 2024' },
  { id: 'j6', title: 'Marketing Intern', department: 'Marketing', location: 'Austin, TX', type: 'Internship', status: 'Draft', applicants: 0, hiringManager: 'Eva Martinez', postedDate: '—' },
  { id: 'j7', title: 'DevOps Engineer', department: 'Infrastructure', location: 'Remote · US', type: 'Contract', status: 'Open', applicants: 58, hiringManager: 'Hank Miller', postedDate: 'Oct 20, 2024' },
  { id: 'j8', title: 'Customer Success Lead', department: 'Customer', location: 'Chicago, IL', type: 'Full-time', status: 'Closed', applicants: 211, hiringManager: 'Grace Park', postedDate: 'Jul 1, 2024' },
];

export const candidates: Candidate[] = [
  { id: 'c1', name: 'Marcus Liu', avatar: 'ML', email: 'marcus.liu@mail.com', jobId: 'j1', jobTitle: 'Senior Frontend Engineer', stage: 'interview', rating: 5, matchScore: 94, source: 'LinkedIn', appliedDate: 'Oct 14, 2024', location: 'Seattle, WA', skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'], experience: 7, aiSummary: 'Strong frontend specialist with 7 years of React experience. Led design systems at two unicorns. Excellent match for senior IC role.' },
  { id: 'c2', name: 'Priya Shah', avatar: 'PS', email: 'priya.shah@mail.com', jobId: 'j2', jobTitle: 'Product Designer', stage: 'offer', rating: 5, matchScore: 91, source: 'Referral', appliedDate: 'Oct 8, 2024', location: 'New York, NY', skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'], experience: 6, aiSummary: 'Senior designer with deep SaaS B2B background. Portfolio shows strong systems thinking and high craft.' },
  { id: 'c3', name: 'Jordan Wells', avatar: 'JW', email: 'jordan.wells@mail.com', jobId: 'j1', jobTitle: 'Senior Frontend Engineer', stage: 'screen', rating: 4, matchScore: 82, source: 'Company Website', appliedDate: 'Oct 22, 2024', location: 'Austin, TX', skills: ['React', 'JavaScript', 'CSS', 'Node.js'], experience: 5 },
  { id: 'c4', name: 'Aisha Khan', avatar: 'AK', email: 'aisha.khan@mail.com', jobId: 'j3', jobTitle: 'Backend Engineer (Node.js)', stage: 'applied', rating: 4, matchScore: 78, source: 'Indeed', appliedDate: 'Oct 25, 2024', location: 'London, UK', skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'], experience: 6 },
  { id: 'c5', name: 'Diego Hernandez', avatar: 'DH', email: 'diego.h@mail.com', jobId: 'j3', jobTitle: 'Backend Engineer (Node.js)', stage: 'interview', rating: 5, matchScore: 88, source: 'LinkedIn', appliedDate: 'Oct 11, 2024', location: 'Madrid, ES', skills: ['Node.js', 'TypeScript', 'Microservices', 'AWS'], experience: 8 },
  { id: 'c6', name: 'Yuki Tanaka', avatar: 'YT', email: 'yuki.t@mail.com', jobId: 'j5', jobTitle: 'Data Analyst', stage: 'sourced', rating: 3, matchScore: 71, source: 'Sourced', appliedDate: 'Oct 26, 2024', location: 'Tokyo, JP', skills: ['SQL', 'Python', 'Tableau', 'dbt'], experience: 4 },
  { id: 'c7', name: 'Olivia Brown', avatar: 'OB', email: 'olivia.b@mail.com', jobId: 'j2', jobTitle: 'Product Designer', stage: 'screen', rating: 4, matchScore: 80, source: 'Dribbble', appliedDate: 'Oct 19, 2024', location: 'Toronto, CA', skills: ['Figma', 'Illustration', 'Branding'], experience: 5 },
  { id: 'c8', name: 'Ravi Patel', avatar: 'RP', email: 'ravi.p@mail.com', jobId: 'j7', jobTitle: 'DevOps Engineer', stage: 'applied', rating: 4, matchScore: 84, source: 'Referral', appliedDate: 'Oct 23, 2024', location: 'Remote', skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'], experience: 7 },
  { id: 'c9', name: 'Emma Wilson', avatar: 'EW', email: 'emma.w@mail.com', jobId: 'j1', jobTitle: 'Senior Frontend Engineer', stage: 'hired', rating: 5, matchScore: 96, source: 'Referral', appliedDate: 'Sep 10, 2024', location: 'Remote', skills: ['React', 'Next.js', 'TypeScript'], experience: 9 },
  { id: 'c10', name: 'Noah Schmidt', avatar: 'NS', email: 'noah.s@mail.com', jobId: 'j1', jobTitle: 'Senior Frontend Engineer', stage: 'rejected', rating: 2, matchScore: 54, source: 'Indeed', appliedDate: 'Oct 5, 2024', location: 'Berlin, DE', skills: ['Vue', 'HTML', 'CSS'], experience: 3 },
  { id: 'c11', name: 'Sofia Rossi', avatar: 'SR', email: 'sofia.r@mail.com', jobId: 'j5', jobTitle: 'Data Analyst', stage: 'screen', rating: 4, matchScore: 83, source: 'LinkedIn', appliedDate: 'Oct 21, 2024', location: 'Rome, IT', skills: ['SQL', 'Looker', 'Python'], experience: 5 },
  { id: 'c12', name: 'Liam Carter', avatar: 'LC', email: 'liam.c@mail.com', jobId: 'j2', jobTitle: 'Product Designer', stage: 'interview', rating: 4, matchScore: 86, source: 'Portfolio', appliedDate: 'Oct 13, 2024', location: 'Remote', skills: ['Figma', 'Motion', 'Design Systems'], experience: 6 },
];

export const interviews: Interview[] = [
  { id: 'i1', candidateId: 'c1', candidateName: 'Marcus Liu', jobTitle: 'Senior Frontend Engineer', type: 'Technical', date: '2024-10-29T15:00:00Z', duration: 60, interviewers: ['Sarah Park', 'Alex Rivera'], status: 'Scheduled', meetLink: 'meet.google.com/abc-defg-hij' },
  { id: 'i2', candidateId: 'c5', candidateName: 'Diego Hernandez', jobTitle: 'Backend Engineer', type: 'Onsite', date: '2024-10-30T13:00:00Z', duration: 180, interviewers: ['Sarah Park', 'David Kim', 'Hank Miller'], status: 'Scheduled', meetLink: 'meet.google.com/xyz-uvwx-yz' },
  { id: 'i3', candidateId: 'c12', candidateName: 'Liam Carter', jobTitle: 'Product Designer', type: 'Culture Fit', date: '2024-10-29T18:30:00Z', duration: 45, interviewers: ['David Kim'], status: 'Scheduled' },
  { id: 'i4', candidateId: 'c2', candidateName: 'Priya Shah', jobTitle: 'Product Designer', type: 'Final', date: '2024-10-28T16:00:00Z', duration: 60, interviewers: ['David Kim', 'CEO'], status: 'Completed' },
  { id: 'i5', candidateId: 'c3', candidateName: 'Jordan Wells', jobTitle: 'Senior Frontend Engineer', type: 'Phone Screen', date: '2024-10-31T14:00:00Z', duration: 30, interviewers: ['Sarah Park'], status: 'Scheduled' },
  { id: 'i6', candidateId: 'c7', candidateName: 'Olivia Brown', jobTitle: 'Product Designer', type: 'Phone Screen', date: '2024-11-01T17:00:00Z', duration: 30, interviewers: ['David Kim'], status: 'Scheduled' },
];

export const tasks: Task[] = [
  { id: 't1', title: 'Review Marcus Liu technical assessment', due: 'Today', assignee: 'Sarah Park', priority: 'High', done: false, relatedTo: 'Marcus Liu' },
  { id: 't2', title: 'Send offer letter to Priya Shah', due: 'Today', assignee: 'David Kim', priority: 'High', done: false, relatedTo: 'Priya Shah' },
  { id: 't3', title: 'Schedule final round for Diego Hernandez', due: 'Tomorrow', assignee: 'Sarah Park', priority: 'Medium', done: false, relatedTo: 'Diego Hernandez' },
  { id: 't4', title: 'Sync hiring plan with Engineering leadership', due: 'Oct 30', assignee: 'Alex Rivera', priority: 'Medium', done: false },
  { id: 't5', title: 'Close out rejected candidates from Q3', due: 'Oct 31', assignee: 'Sarah Park', priority: 'Low', done: true },
  { id: 't6', title: 'Update job description for DevOps role', due: 'Nov 2', assignee: 'Hank Miller', priority: 'Low', done: false },
];

export const team: TeamMember[] = [
  { id: 'u1', name: 'Sarah Park', email: 'sarah@company.com', role: 'Recruiter', avatar: 'SP', status: 'active', joined: 'Jan 12, 2023' },
  { id: 'u2', name: 'David Kim', email: 'david@company.com', role: 'Hiring Manager', avatar: 'DK', status: 'active', joined: 'Feb 3, 2023' },
  { id: 'u3', name: 'Alex Rivera', email: 'alex@company.com', role: 'Hiring Manager', avatar: 'AR', status: 'active', joined: 'Mar 18, 2023' },
  { id: 'u4', name: 'Priya Shah', email: 'priya@company.com', role: 'Recruiter', avatar: 'PS', status: 'active', joined: 'Apr 5, 2023' },
  { id: 'u5', name: 'Eva Martinez', email: 'eva@company.com', role: 'Interviewer', avatar: 'EM', status: 'active', joined: 'May 22, 2023' },
  { id: 'u6', name: 'Hank Miller', email: 'hank@company.com', role: 'Interviewer', avatar: 'HM', status: 'pending', joined: 'Aug 15, 2024' },
  { id: 'u7', name: 'Grace Park', email: 'grace@company.com', role: 'Admin', avatar: 'GP', status: 'active', joined: 'Jul 1, 2022' },
];

export const hiringFunnel: ChartDataPoint[] = [
  { label: 'Applied', value: 1284 },
  { label: 'Screen', value: 412 },
  { label: 'Interview', value: 184 },
  { label: 'Offer', value: 38 },
  { label: 'Hired', value: 24 },
];

export const timeToHire: ChartDataPoint[] = [
  { label: 'Jan', value: 32, secondaryValue: 28 },
  { label: 'Feb', value: 29, secondaryValue: 28 },
  { label: 'Mar', value: 31, secondaryValue: 28 },
  { label: 'Apr', value: 27, secondaryValue: 28 },
  { label: 'May', value: 25, secondaryValue: 28 },
  { label: 'Jun', value: 26, secondaryValue: 28 },
  { label: 'Jul', value: 24, secondaryValue: 28 },
  { label: 'Aug', value: 22, secondaryValue: 28 },
];

export const sourcesBreakdown: ChartDataPoint[] = [
  { label: 'LinkedIn', value: 42 },
  { label: 'Referral', value: 24 },
  { label: 'Company Website', value: 16 },
  { label: 'Indeed', value: 11 },
  { label: 'Other', value: 7 },
];

export const integrations: Integration[] = [
  { id: 'gmail', name: 'Gmail', description: 'Send and track candidate emails directly inside the ATS.', connected: true, icon: 'mail', category: 'Google Workspace' },
  { id: 'gcal', name: 'Google Calendar', description: 'Schedule interviews and sync availability across your team.', connected: true, icon: 'calendar', category: 'Google Workspace' },
  { id: 'gdrive', name: 'Google Drive', description: 'Store and manage resumes, scorecards, and offer letters.', connected: true, icon: 'folder', category: 'Google Workspace' },
  { id: 'gmeet', name: 'Google Meet', description: 'Auto-generate Meet links for every interview.', connected: true, icon: 'video', category: 'Google Workspace' },
  { id: 'openai', name: 'AI Assistant', description: 'Resume parsing, match scoring, AI summaries, and question generation.', connected: true, icon: 'sparkles', category: 'AI' },
  { id: 'slack', name: 'Slack', description: 'Recruiter notifications and pipeline updates.', connected: false, icon: 'message', category: 'Communication' },
  { id: 'dropbox', name: 'Dropbox', description: 'Alternative document storage for offer letters.', connected: false, icon: 'box', category: 'Storage' },
];
