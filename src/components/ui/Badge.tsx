import styles from './Badge.module.css';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'red' | 'yellow' | 'gray';
}

export default function Badge({ children, variant = 'gray' }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant])}>
      {children}
    </span>
  );
}
