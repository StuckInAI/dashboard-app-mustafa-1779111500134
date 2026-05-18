export interface Candidate {
  id: string;
  name: string;
  role: string;
  status: string;
  date: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  status: string;
  applicants: number;
}

export interface Stats {
  totalCandidates: number;
  openPositions: number;
  interviewsThisWeek: number;
  offersSentThisMonth: number;
}
