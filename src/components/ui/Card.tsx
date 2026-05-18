import { ReactNode } from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ children, className, padding = 'md' }: CardProps) {
  return (
    <div className={clsx(styles.card, styles[padding], className)}>
      {children}
    </div>
  );
}
