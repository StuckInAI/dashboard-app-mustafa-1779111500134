import type { StatCard, ActivityItem, User, ChartDataPoint } from '@/types';

export const statCards: StatCard[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$84,254',
    change: 12.5,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-blue)',
    icon: 'dollar',
  },
  {
    id: '2',
    title: 'Active Users',
    value: '24,521',
    change: 8.2,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-green)',
    icon: 'users',
  },
  {
    id: '3',
    title: 'New Orders',
    value: '1,893',
    change: -3.1,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-red)',
    icon: 'shopping',
  },
  {
    id: '4',
    title: 'Conversion Rate',
    value: '3.67%',
    change: 5.4,
    changeLabel: 'vs last month',
    gradient: 'var(--gradient-purple)',
    icon: 'chart',
  },
];

export const recentActivity: ActivityItem[] = [
  { id: '1', user: 'Alice Johnson', avatar: 'AJ', action: 'placed a new order', target: '#ORD-4521', time: '2 min ago', type: 'success' },
  { id: '2', user: 'Bob Chen', avatar: 'BC', action: 'reported an issue with', target: 'Payment Gateway', time: '14 min ago', type: 'error' },
  { id: '3', user: 'Carol White', avatar: 'CW', action: 'upgraded plan to', target: 'Pro Tier', time: '1 hr ago', type: 'info' },
  { id: '4', user: 'David Kim', avatar: 'DK', action: 'submitted review for', target: 'Product #1042', time: '2 hr ago', type: 'success' },
  { id: '5', user: 'Eva Martinez', avatar: 'EM', action: 'pending approval for', target: 'Refund #884', time: '3 hr ago', type: 'warning' },
  { id: '6', user: 'Frank Lee', avatar: 'FL', action: 'registered as new user via', target: 'Google OAuth', time: '5 hr ago', type: 'info' },
];

export const users: User[] = [
  { id: 'u1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active', joined: 'Jan 12, 2024', avatar: 'AJ' },
  { id: 'u2', name: 'Bob Chen', email: 'bob@example.com', role: 'Developer', status: 'active', joined: 'Feb 3, 2024', avatar: 'BC' },
  { id: 'u3', name: 'Carol White', email: 'carol@example.com', role: 'Designer', status: 'inactive', joined: 'Mar 18, 2024', avatar: 'CW' },
  { id: 'u4', name: 'David Kim', email: 'david@example.com', role: 'Manager', status: 'active', joined: 'Apr 5, 2024', avatar: 'DK' },
  { id: 'u5', name: 'Eva Martinez', email: 'eva@example.com', role: 'Marketing', status: 'pending', joined: 'May 22, 2024', avatar: 'EM' },
  { id: 'u6', name: 'Frank Lee', email: 'frank@example.com', role: 'Support', status: 'active', joined: 'Jun 9, 2024', avatar: 'FL' },
  { id: 'u7', name: 'Grace Park', email: 'grace@example.com', role: 'Developer', status: 'active', joined: 'Jul 1, 2024', avatar: 'GP' },
  { id: 'u8', name: 'Hank Miller', email: 'hank@example.com', role: 'Finance', status: 'inactive', joined: 'Aug 15, 2024', avatar: 'HM' },
];

export const revenueChartData: ChartDataPoint[] = [
  { label: 'Jan', value: 42000, secondaryValue: 31000 },
  { label: 'Feb', value: 55000, secondaryValue: 40000 },
  { label: 'Mar', value: 48000, secondaryValue: 38000 },
  { label: 'Apr', value: 63000, secondaryValue: 50000 },
  { label: 'May', value: 71000, secondaryValue: 55000 },
  { label: 'Jun', value: 67000, secondaryValue: 52000 },
  { label: 'Jul', value: 84000, secondaryValue: 63000 },
  { label: 'Aug', value: 79000, secondaryValue: 60000 },
];

export const trafficSources: ChartDataPoint[] = [
  { label: 'Organic Search', value: 38 },
  { label: 'Direct', value: 24 },
  { label: 'Social Media', value: 19 },
  { label: 'Email', value: 12 },
  { label: 'Referral', value: 7 },
];
