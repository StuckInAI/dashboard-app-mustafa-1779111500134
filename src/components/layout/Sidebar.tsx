import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <a href="/">Dashboard</a>
      </nav>
    </aside>
  );
}
