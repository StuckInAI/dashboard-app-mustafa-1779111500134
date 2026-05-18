import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Kanban,
  CalendarDays,
  CheckSquare,
  BarChart3,
  Plug,
  Settings,
  Sparkles,
} from 'lucide-react';
import styles from './Sidebar.module.css';

const mainNav = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Jobs', path: '/jobs', icon: Briefcase },
  { label: 'Candidates', path: '/candidates', icon: Users },
  { label: 'Pipeline', path: '/pipeline', icon: Kanban },
  { label: 'Interviews', path: '/interviews', icon: CalendarDays },
  { label: 'Tasks', path: '/tasks', icon: CheckSquare },
];

const secondaryNav = [
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Integrations', path: '/integrations', icon: Plug },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Sparkles size={18} />
        </div>
        <span className={styles.logoText}>HireFlow</span>
      </div>

      <nav className={styles.nav}>
        <p className={styles.navLabel}>Recruiting</p>
        {mainNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.navItemActive : ''].join(' ')
            }
          >
            <item.icon size={18} className={styles.navIcon} />
            <span>{item.label}</span>
          </NavLink>
        ))}

        <p className={styles.navLabel} style={{ marginTop: 20 }}>Workspace</p>
        {secondaryNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [styles.navItem, isActive ? styles.navItemActive : ''].join(' ')
            }
          >
            <item.icon size={18} className={styles.navIcon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.avatarSmall}>SP</div>
        <div className={styles.footerInfo}>
          <p className={styles.footerName}>Sarah Park</p>
          <p className={styles.footerRole}>Recruiter · Admin</p>
        </div>
      </div>
    </aside>
  );
}
