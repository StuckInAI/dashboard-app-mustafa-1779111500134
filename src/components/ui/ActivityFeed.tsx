import styles from './ActivityFeed.module.css';

interface Activity {
  id: string;
  text: string;
  time: string;
  type?: string;
}

interface ActivityFeedProps {
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
  { id: '1', text: 'New candidate applied', time: '2 min ago', type: 'apply' },
  { id: '2', text: 'Interview scheduled', time: '15 min ago', type: 'interview' },
  { id: '3', text: 'Offer sent', time: '1 hr ago', type: 'offer' },
];

export default function ActivityFeed({ activities = defaultActivities }: ActivityFeedProps) {
  return (
    <div className={styles.feed}>
      {activities.map((a) => (
        <div key={a.id} className={styles.item}>
          <div className={styles.dot} />
          <div className={styles.content}>
            <p className={styles.text}>{a.text}</p>
            <span className={styles.time}>{a.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
