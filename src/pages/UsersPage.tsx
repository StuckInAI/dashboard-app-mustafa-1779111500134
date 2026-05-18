import { useState } from 'react';
import { Mail, Phone, MoreVertical } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import styles from './UsersPage.module.css';

type TeamMember = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: 'active' | 'invited' | 'inactive';
  avatar: string;
  initialsBg: string;
};

const INITIAL_USERS: TeamMember[] = [
  {
    id: 'u1',
    name: 'Sarah Park',
    email: 'sarah.park@hireflow.app',
    phone: '+1 (415) 555-0142',
    role: 'Admin',
    department: 'Recruiting',
    status: 'active',
    avatar: 'SP',
    initialsBg: 'var(--gradient-purple)',
  },
  {
    id: 'u2',
    name: 'Marcus Lee',
    email: 'marcus.lee@hireflow.app',
    phone: '+1 (628) 555-0178',
    role: 'Recruiter',
    department: 'Recruiting',
    status: 'active',
    avatar: 'ML',
    initialsBg: 'var(--gradient-blue)',
  },
  {
    id: 'u3',
    name: 'Priya Nair',
    email: 'priya.nair@hireflow.app',
    phone: '+1 (510) 555-0193',
    role: 'Hiring Manager',
    department: 'Engineering',
    status: 'active',
    avatar: 'PN',
    initialsBg: 'linear-gradient(135deg, #3ecf8e 0%, #4f8ef7 100%)',
  },
  {
    id: 'u4',
    name: 'Diego Alvarez',
    email: 'diego.alvarez@hireflow.app',
    phone: '+1 (650) 555-0104',
    role: 'Interviewer',
    department: 'Design',
    status: 'invited',
    avatar: 'DA',
    initialsBg: 'linear-gradient(135deg, #f79c4f 0%, #f75f5f 100%)',
  },
  {
    id: 'u5',
    name: 'Hannah Chen',
    email: 'hannah.chen@hireflow.app',
    phone: '+1 (415) 555-0167',
    role: 'Recruiter',
    department: 'Recruiting',
    status: 'inactive',
    avatar: 'HC',
    initialsBg: 'linear-gradient(135deg, #9b6bf2 0%, #f75f5f 100%)',
  },
];

const STATUS_VARIANT: Record<TeamMember['status'], 'success' | 'warning' | 'neutral'> = {
  active: 'success',
  invited: 'warning',
  inactive: 'neutral',
};

export default function UsersPage() {
  const [users] = useState<TeamMember[]>(INITIAL_USERS);

  return (
    <div className={styles.page}>
      <Card title="Team Members" subtitle="Manage workspace access and roles">
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className={styles.userCell}>
                      <div className={styles.avatar} style={{ background: u.initialsBg }}>
                        {u.avatar}
                      </div>
                      <div>
                        <div className={styles.userName}>{u.name}</div>
                        <div className={styles.userMeta}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.contact}>
                      <span className={styles.contactItem}>
                        <Mail size={13} /> {u.email}
                      </span>
                      <span className={styles.contactItem}>
                        <Phone size={13} /> {u.phone}
                      </span>
                    </div>
                  </td>
                  <td className={styles.role}>{u.role}</td>
                  <td className={styles.department}>{u.department}</td>
                  <td>
                    <Badge variant={STATUS_VARIANT[u.status]}>{u.status}</Badge>
                  </td>
                  <td>
                    <button className={styles.iconBtn} aria-label="More">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
