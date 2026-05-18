export type NavItem = {
  label: string;
  path: string;
  icon: string;
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

export type ActivityItem = {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  type: 'success' | 'warning' | 'info' | 'error';
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joined: string;
  avatar: string;
};

export type ChartDataPoint = {
  label: string;
  value: number;
  secondaryValue?: number;
};
