import styles from './DashboardPage.module.css';
import { mockStats, mockCandidates } from '../lib/mockData';

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Candidates</span>
          <span className={styles.statValue}>{mockStats.totalCandidates}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Active Jobs</span>
          <span className={styles.statValue}>{mockStats.activeJobs}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Interviews Today</span>
          <span className={styles.statValue}>{mockStats.interviewsToday}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Offers</span>
          <span className={styles.statValue}>{mockStats.offers}</span>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>Recent Candidates</h2>
      <div className={styles.table}>
        {mockCandidates.map((c) => (
          <div key={c.id} className={styles.row}>
            <span className={styles.name}>{c.name}</span>
            <span className={styles.role}>{c.role}</span>
            <span className={styles.status}>{c.status}</span>
            <span className={styles.score}>{c.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
