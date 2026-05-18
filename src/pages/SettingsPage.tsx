import React, { useState } from 'react';
import styles from './SettingsPage.module.css';

export default function SettingsPage() {
  const [name, setName] = useState('Acme Corp');
  const [email, setEmail] = useState('admin@acmecorp.com');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Settings</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Company Info</h2>
        <div className={styles.field}>
          <label className={styles.label}>Company Name</label>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Admin Email</label>
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={styles.saveBtn}>Save Changes</button>
      </div>
    </div>
  );
}
