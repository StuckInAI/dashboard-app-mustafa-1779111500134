import { useState } from 'react';
import styles from './CandidatesPage.module.css';
import { mockCandidates } from '../lib/mockData';
import type { Candidate } from '../types';

export default function CandidatesPage() {
  const [candidates] = useState<Candidate[]>(mockCandidates);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Candidates</h1>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          <span>Name</span>
          <span>Role</span>
          <span>Status</span>
          <span>Score</span>
        </div>
        {candidates.map((c) => (
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
