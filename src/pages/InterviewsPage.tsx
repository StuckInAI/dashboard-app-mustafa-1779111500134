import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { interviews } from '@/lib/mockData';
import { Calendar, Video, Users, Clock } from 'lucide-react';
import styles from './InterviewsPage.module.css';

function typeVariant(t: string) {
  switch (t) {
    case 'Technical': return 'info';
    case 'Onsite': return 'warning';
    case 'Final': return 'success';
    case 'Phone Screen': return 'neutral';
    default: return 'info';
  }
}

export default function InterviewsPage() {
  const scheduled = interviews.filter((i) => i.status === 'Scheduled');
  const completed = interviews.filter((i) => i.status === 'Completed');

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Calendar size={20} color="var(--color-accent-blue)" />
        <div>
          <p className={styles.bannerTitle}>Google Calendar Connected</p>
          <p className={styles.bannerSub}>Interviews automatically sync with your team's calendars. Meet links generated on schedule.</p>
        </div>
      </div>

      <Card title="Upcoming Interviews" subtitle={`${scheduled.length} scheduled`}>
        <div className={styles.list}>
          {scheduled.map((i) => {
            const d = new Date(i.date);
            return (
              <div key={i.id} className={styles.row}>
                <div className={styles.dateCol}>
                  <p className={styles.month}>{d.toLocaleDateString(undefined, { month: 'short' })}</p>
                  <p className={styles.day}>{d.getDate()}</p>
                  <p className={styles.time}>{d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div className={styles.mainCol}>
                  <div className={styles.titleRow}>
                    <h4 className={styles.candidate}>{i.candidateName}</h4>
                    <Badge variant={typeVariant(i.type) as any}>{i.type}</Badge>
                  </div>
                  <p className={styles.role}>{i.jobTitle}</p>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}><Clock size={12} /> {i.duration} min</span>
                    <span className={styles.metaItem}><Users size={12} /> {i.interviewers.join(', ')}</span>
                    {i.meetLink && (
                      <span className={styles.metaItem}><Video size={12} /> {i.meetLink}</span>
                    )}
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.joinBtn}>Join</button>
                  <button className={styles.secondaryBtn}>Reschedule</button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card title="Recently Completed" subtitle={`${completed.length} interview${completed.length === 1 ? '' : 's'}`}>
        <div className={styles.list}>
          {completed.map((i) => (
            <div key={i.id} className={styles.row}>
              <div className={styles.dateColMuted}>
                <p className={styles.month}>{new Date(i.date).toLocaleDateString(undefined, { month: 'short' })}</p>
                <p className={styles.day}>{new Date(i.date).getDate()}</p>
              </div>
              <div className={styles.mainCol}>
                <h4 className={styles.candidate}>{i.candidateName}</h4>
                <p className={styles.role}>{i.jobTitle} · {i.type}</p>
              </div>
              <Badge variant="success">Completed</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
