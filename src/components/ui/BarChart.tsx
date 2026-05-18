import type { ChartDataPoint } from '@/types';
import styles from './BarChart.module.css';

type BarChartProps = {
  data: ChartDataPoint[];
  height?: number;
};

export default function BarChart({ data, height = 180 }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const maxSecondary = Math.max(...data.map((d) => d.secondaryValue ?? 0));
  const overallMax = Math.max(maxValue, maxSecondary);

  return (
    <div className={styles.wrapper} style={{ height }}>
      <div className={styles.chart}>
        {data.map((point) => {
          const primaryPct = (point.value / overallMax) * 100;
          const secondaryPct = point.secondaryValue ? (point.secondaryValue / overallMax) * 100 : 0;
          return (
            <div key={point.label} className={styles.group}>
              <div className={styles.bars}>
                {point.secondaryValue !== undefined && (
                  <div
                    className={styles.barSecondary}
                    style={{ height: `${secondaryPct}%` }}
                    title={`${point.label}: ${point.secondaryValue}`}
                  />
                )}
                <div
                  className={styles.barPrimary}
                  style={{ height: `${primaryPct}%` }}
                  title={`${point.label}: ${point.value}`}
                />
              </div>
              <span className={styles.label}>{point.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
