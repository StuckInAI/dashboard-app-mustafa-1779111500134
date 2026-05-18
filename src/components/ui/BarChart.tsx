import styles from './BarChart.module.css';

interface BarChartProps {
  data: { label: string; value: number }[];
  max?: number;
}

export default function BarChart({ data, max }: BarChartProps) {
  const maxVal = max ?? Math.max(...data.map((d) => d.value), 1);
  return (
    <div className={styles.chart}>
      {data.map((d) => (
        <div key={d.label} className={styles.bar}>
          <div
            className={styles.fill}
            style={{ height: `${(d.value / maxVal) * 100}%` }}
          />
          <span className={styles.label}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
