import styles from './DonutChart.module.css';

interface DonutChartProps {
  data?: { label: string; value: number; color: string }[];
  size?: number;
  thickness?: number;
}

const defaultData = [
  { label: 'Applied', value: 40, color: '#3b82f6' },
  { label: 'Interview', value: 30, color: '#f59e0b' },
  { label: 'Offer', value: 20, color: '#1dbf73' },
  { label: 'Rejected', value: 10, color: '#ef4444' },
];

export default function DonutChart({ data = defaultData, size = 160, thickness = 30 }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div className={styles.wrap}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d) => {
          const offset = circumference - (d.value / total) * circumference;
          const rotation = (cumulative / total) * 360 - 90;
          cumulative += d.value;
          return (
            <circle
              key={d.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          );
        })}
      </svg>
      <div className={styles.legend}>
        {data.map((d) => (
          <div key={d.label} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: d.color }} />
            <span className={styles.legendLabel}>{d.label}</span>
            <span className={styles.legendVal}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
