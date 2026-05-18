import { useState } from 'react';
import styles from './UsersPage.module.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const initialUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Recruiter' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Hiring Manager' },
];

export default function UsersPage() {
  const [users] = useState<User[]>(initialUsers);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.table}>
        <div className={styles.headerRow}>
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
        </div>
        {users.map((u) => (
          <div key={u.id} className={styles.row}>
            <span className={styles.name}>{u.name}</span>
            <span className={styles.email}>{u.email}</span>
            <span className={styles.role}>{u.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
