import styles from './DonutChart.module.css';

interface DonutChartProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
}

export default function DonutChart({ value, max = 100, label, color = '#1dbf73' }: DonutChartProps) {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const dash = pct * circ;

  return (
    <div className={styles.wrapper}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
