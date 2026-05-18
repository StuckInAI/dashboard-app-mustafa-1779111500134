import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { jobs } from '@/lib/mockData';
import { MapPin, Users, Plus } from 'lucide-react';
import styles from './JobsPage.module.css';

const filters = ['All', 'Open', 'Draft', 'On Hold', 'Closed'] as const;

function statusVariant(s: string) {
  switch (s) {
    case 'Open': return 'success';
    case 'Draft': return 'neutral';
    case 'On Hold': return 'warning';
    case 'Closed': return 'error';
    default: return 'info';
  }
}

export default function JobsPage() {
  const [filter, setFilter] = useState<typeof filters[number]>('All');
  const visible = filter === 'All' ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          {filters.map((f) => (
            <button
              key={f}
              className={[styles.tab, filter === f ? styles.tabActive : ''].join(' ')}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className={styles.tabCount}>
                {f === 'All' ? jobs.length : jobs.filter((j) => j.status === f).length}
              </span>
            </button>
          ))}
        </div>
        <button className={styles.createBtn}><Plus size={15} /> Post a Job</button>
      </div>

      <div className={styles.grid}>
        {visible.map((job) => (
          <Card key={job.id} className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <div>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDept}>{job.department} · {job.type}</p>
              </div>
              <Badge variant={statusVariant(job.status) as any}>{job.status}</Badge>
            </div>
            <div className={styles.jobMeta}>
              <span className={styles.metaItem}><MapPin size={13} /> {job.location}</span>
              <span className={styles.metaItem}><Users size={13} /> {job.applicants} applicants</span>
            </div>
            <div className={styles.jobFooter}>
              <div className={styles.hm}>
                <span className={styles.hmAvatar}>{job.hiringManager.split(' ').map(p => p[0]).join('')}</span>
                <div>
                  <p className={styles.hmName}>{job.hiringManager}</p>
                  <p className={styles.hmLabel}>Hiring Manager</p>
                </div>
              </div>
              <p className={styles.posted}>Posted {job.postedDate}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
