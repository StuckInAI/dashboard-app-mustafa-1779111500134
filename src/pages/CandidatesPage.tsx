import React, { useState } from 'react';
import styles from './CandidatesPage.module.css';
import { mockCandidates } from '@/lib/mockData';

export default function CandidatesPage() {
  const [search, setSearch] = useState('');

  const filtered = mockCandidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Candidates</h1>
      <input
        className={styles.search}
        placeholder="Search candidates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.list}>
        {filtered.map((c) => (
          <div key={c.id} className={styles.card}>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.role}>{c.role}</div>
            <div className={styles.status}>{c.status}</div>
            <div className={styles.date}>{c.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
