export interface Candidate {
  id: string;
  name: string;
  role: string;
  status: string;
  score: number;
}

export interface Job {
  id: string;
  title: string;
  dept: string;
  applicants: number;
  status: string;
}

export interface MockStats {
  totalCandidates: number;
  activeJobs: number;
  interviewsToday: number;
  offers: number;
}
