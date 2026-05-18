import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, BarChart2 } from 'lucide-react';
import type { StatCard as StatCardType } from '@/types';
import styles from './StatCard.module.css';

type StatCardProps = {
  data: StatCardType;
};

const iconMap: Record<string, React.ReactNode> = {
  dollar: <DollarSign size={20} />,
  users: <Users size={20} />,
  shopping: <ShoppingCart size={20} />,
  chart: <BarChart2 size={20} />,
};

export default function StatCard({ data }: StatCardProps) {
  const isPositive = data.change >= 0;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={{ background: data.gradient }}>
        {iconMap[data.icon]}
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.value}>{data.value}</p>
      </div>
      <div className={[styles.change, isPositive ? styles.positive : styles.negative].join(' ')}>
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{Math.abs(data.change)}%</span>
      </div>
      <p className={styles.changeLabel}>{data.changeLabel}</p>
    </div>
  );
}
