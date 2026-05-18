import styles from './ActivityFeed.module.css';

interface Activity {
  id: string;
  text: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className={styles.feed}>
      {activities.map((a) => (
        <div key={a.id} className={styles.item}>
          <span className={styles.text}>{a.text}</span>
          <span className={styles.time}>{a.time}</span>
        </div>
      ))}
    </div>
  );
}
