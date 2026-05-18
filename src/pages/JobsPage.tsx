import React from 'react';
import styles from './JobsPage.module.css';
import { mockJobs } from '@/lib/mockData';

export default function JobsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Jobs</h1>
      <div className={styles.list}>
        {mockJobs.map((job) => (
          <div key={job.id} className={styles.card}>
            <div className={styles.jobTitle}>{job.title}</div>
            <div className={styles.dept}>{job.department}</div>
            <div className={styles.location}>{job.location}</div>
            <div className={styles.status}>{job.status}</div>
            <div className={styles.applicants}>{job.applicants} applicants</div>
          </div>
        ))}
      </div>
    </div>
  );
}
