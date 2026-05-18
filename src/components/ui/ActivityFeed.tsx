import type { ActivityItem } from '@/types';
import styles from './ActivityFeed.module.css';

type ActivityFeedProps = {
  items: ActivityItem[];
};

const typeColors: Record<ActivityItem['type'], string> = {
  success: 'var(--color-accent-green)',
  error: 'var(--color-accent-red)',
  warning: 'var(--color-accent-orange)',
  info: 'var(--color-accent-blue)',
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className={styles.feed}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>{item.avatar}</div>
            <span
              className={styles.dot}
              style={{ background: typeColors[item.type] }}
            />
          </div>
          <div className={styles.body}>
            <p className={styles.text}>
              <span className={styles.userName}>{item.user}</span>{' '}
              {item.action}{' '}
              <span className={styles.target}>{item.target}</span>
            </p>
            <p className={styles.time}>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
