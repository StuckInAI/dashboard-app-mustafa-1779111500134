import styles from './Sidebar.module.css';

interface SidebarProps {
  open?: boolean;
}

export default function Sidebar({ open = true }: SidebarProps) {
  if (!open) return null;
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Dashboard</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.navItem}>Home</a>
      </nav>
    </aside>
  );
}
