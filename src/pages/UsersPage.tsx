import React, { useState } from 'react';
import styles from './UsersPage.module.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const initialUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@acme.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Bob Smith', email: 'bob@acme.com', role: 'Recruiter', status: 'Active' },
  { id: '3', name: 'Carol White', email: 'carol@acme.com', role: 'Hiring Manager', status: 'Inactive' },
];

export default function UsersPage() {
  const [users] = useState<User[]>(initialUsers);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.list}>
        {users.map((u) => (
          <div key={u.id} className={styles.card}>
            <div className={styles.name}>{u.name}</div>
            <div className={styles.email}>{u.email}</div>
            <div className={styles.role}>{u.role}</div>
            <div className={u.status === 'Active' ? styles.active : styles.inactive}>
              {u.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
