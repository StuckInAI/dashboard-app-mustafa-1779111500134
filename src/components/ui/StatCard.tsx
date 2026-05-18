import styles from './StatCard.module.css';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: number;
  color?: 'green' | 'blue' | 'yellow' | 'red';
}

export default function StatCard({ title, value, icon, trend, color = 'green' }: StatCardProps) {
  return (
    <div className={clsx(styles.card, styles[color])}>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      <div className={styles.value}>{value}</div>
      {trend !== undefined && (
        <div className={clsx(styles.trend, trend >= 0 ? styles.up : styles.down)}>
          {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  );
}
