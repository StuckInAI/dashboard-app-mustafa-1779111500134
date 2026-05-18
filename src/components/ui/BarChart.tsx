import styles from './BarChart.module.css';

interface BarChartProps {
  data?: { label: string; value: number }[];
  max?: number;
}

const defaultData = [
  { label: 'Mon', value: 40 },
  { label: 'Tue', value: 65 },
  { label: 'Wed', value: 50 },
  { label: 'Thu', value: 80 },
  { label: 'Fri', value: 70 },
  { label: 'Sat', value: 30 },
  { label: 'Sun', value: 20 },
];

export default function BarChart({ data = defaultData, max = 100 }: BarChartProps) {
  return (
    <div className={styles.chart}>
      <div className={styles.bars}>
        {data.map((d) => (
          <div key={d.label} className={styles.barWrap}>
            <div
              className={styles.bar}
              style={{ height: `${(d.value / max) * 100}%` }}
            />
            <span className={styles.label}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
