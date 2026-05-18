import { Bell, Search, Plus } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Recruiting Dashboard', subtitle: 'Your hiring pipeline at a glance' },
  '/jobs': { title: 'Jobs', subtitle: 'Manage open requisitions and job postings' },
  '/candidates': { title: 'Candidates', subtitle: 'Search, filter, and review applicants' },
  '/pipeline': { title: 'Hiring Pipeline', subtitle: 'Drag candidates across stages' },
  '/interviews': { title: 'Interviews', subtitle: 'Schedule and manage interview loops' },
  '/tasks': { title: 'Tasks & Reminders', subtitle: 'Stay on top of your recruiting work' },
  '/analytics': { title: 'Recruitment Analytics', subtitle: 'Funnel, source quality, and time-to-hire' },
  '/integrations': { title: 'Integrations', subtitle: 'Google Workspace and AI services' },
  '/settings': { title: 'Settings', subtitle: 'Team, roles, and workspace preferences' },
};

export default function Header() {
  const location = useLocation();
  const info = pageTitles[location.pathname] || { title: 'HireFlow', subtitle: '' };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>{info.title}</h1>
        <p className={styles.subtitle}>{info.subtitle}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <Search size={15} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search candidates, jobs..."
            className={styles.searchInput}
          />
        </div>
        <button className={styles.primaryBtn}>
          <Plus size={15} />
          <span>New Job</span>
        </button>
        <button className={styles.iconBtn}>
          <Bell size={18} />
          <span className={styles.badge}>5</span>
        </button>
        <div className={styles.avatar}>SP</div>
      </div>
    </header>
  );
}
