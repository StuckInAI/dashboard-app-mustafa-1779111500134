import { useState } from 'react';
import styles from './JobsPage.module.css';
import { mockJobs } from '../lib/mockData';
import type { Job } from '../types';

export default function JobsPage() {
  const [jobs] = useState<Job[]>(mockJobs);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Jobs</h1>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          <span>Title</span>
          <span>Department</span>
          <span>Applicants</span>
          <span>Status</span>
        </div>
        {jobs.map((j) => (
          <div key={j.id} className={styles.row}>
            <span className={styles.jobTitle}>{j.title}</span>
            <span className={styles.dept}>{j.dept}</span>
            <span className={styles.applicants}>{j.applicants}</span>
            <span className={styles.status}>{j.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
