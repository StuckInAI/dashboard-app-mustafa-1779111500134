import React from 'react';
import styles from './DashboardPage.module.css';
import { mockStats } from '@/lib/mockData';

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Candidates</div>
          <div className={styles.statValue}>{mockStats.totalCandidates}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Open Positions</div>
          <div className={styles.statValue}>{mockStats.openPositions}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Interviews This Week</div>
          <div className={styles.statValue}>{mockStats.interviewsThisWeek}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Offers Sent</div>
          <div className={styles.statValue}>{mockStats.offersSentThisMonth}</div>
        </div>
      </div>
    </div>
  );
}
