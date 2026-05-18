import { Bell, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/overview': { title: 'Overview', subtitle: 'Welcome back, Admin!' },
  '/analytics': { title: 'Analytics', subtitle: 'Detailed metrics and trends' },
  '/users': { title: 'Users', subtitle: 'Manage your team members' },
  '/settings': { title: 'Settings', subtitle: 'Configure your workspace' },
};

export default function Header() {
  const location = useLocation();
  const info = pageTitles[location.pathname] || { title: 'Dashboard', subtitle: '' };

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
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <button className={styles.iconBtn}>
          <Bell size={18} />
          <span className={styles.badge}>3</span>
        </button>
        <div className={styles.avatar}>AD</div>
      </div>
    </header>
  );
}
