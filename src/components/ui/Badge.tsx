import styles from './Badge.module.css';
import { clsx } from 'clsx';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral';

type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[variant])}>
      {children}
    </span>
  );
}
