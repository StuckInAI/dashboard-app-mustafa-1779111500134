import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Zap,
} from 'lucide-react';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'Overview', path: '/overview', icon: LayoutDashboard },
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Users', path: '/users', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Zap size={18} />
        </div>
        <span className={styles.logoText}>Dashify</span>
      </div>

      <nav className={styles.nav}>
        <p className={styles.navLabel}>Menu</p>
        {navItems.map((item) => (
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
        <div className={styles.avatarSmall}>AD</div>
        <div className={styles.footerInfo}>
          <p className={styles.footerName}>Admin User</p>
          <p className={styles.footerRole}>Super Admin</p>
        </div>
      </div>
    </aside>
  );
}
