import { useState } from 'react';
import { Search, UserPlus } from 'lucide-react';
import styles from './UsersPage.module.css';
import Badge from '@/components/ui/Badge';
import { users as initialUsers } from '@/lib/mockData';
import type { User } from '@/types';

export default function UsersPage() {
  const [users] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || u.status === filter;
    return matchSearch && matchFilter;
  });

  const statusVariant = (status: User['status']) => {
    if (status === 'active') return 'success';
    if (status === 'inactive') return 'neutral';
    return 'warning';
  };

  return (
    <div className={styles.page}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={15} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filters}>
          {(['all', 'active', 'inactive', 'pending'] as const).map((f) => (
            <button
              key={f}
              className={[styles.filterBtn, filter === f ? styles.filterActive : ''].join(' ')}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button className={styles.addBtn}>
          <UserPlus size={15} />
          <span>Add User</span>
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className={styles.userCell}>
                    <div className={styles.avatar}>{user.avatar}</div>
                    <div>
                      <p className={styles.userName}>{user.name}</p>
                      <p className={styles.userEmail}>{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={styles.role}>{user.role}</span>
                </td>
                <td>
                  <Badge variant={statusVariant(user.status)}>{user.status}</Badge>
                </td>
                <td>
                  <span className={styles.joined}>{user.joined}</span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>Edit</button>
                    <button className={[styles.actionBtn, styles.actionBtnDanger].join(' ')}>Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className={styles.empty}>No users found</div>
        )}
      </div>

      <p className={styles.count}>
        Showing {filtered.length} of {users.length} users
      </p>
    </div>
  );
}
