import type { ChartDataPoint } from '@/types';
import styles from './DonutChart.module.css';

type DonutChartProps = {
  data: ChartDataPoint[];
};

const COLORS = [
  'var(--color-accent-blue)',
  'var(--color-accent-green)',
  'var(--color-accent-purple)',
  'var(--color-accent-orange)',
  'var(--color-accent-red)',
];

export default function DonutChart({ data }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  let cumulative = 0;
  const segments = data.map((d, i) => {
    const pct = d.value / total;
    const start = cumulative;
    cumulative += pct;
    return { ...d, pct, start, color: COLORS[i % COLORS.length] };
  });

  const radius = 60;
  const cx = 80;
  const cy = 80;
  const strokeWidth = 22;

  function describeArc(startPct: number, endPct: number): string {
    const startAngle = startPct * 2 * Math.PI - Math.PI / 2;
    const endAngle = endPct * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);
    const largeArc = endPct - startPct > 0.5 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.chart}>
        <svg viewBox="0 0 160 160" width="160" height="160">
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={strokeWidth}
          />
          {segments.map((seg, i) => (
            <path
              key={i}
              d={describeArc(seg.start, seg.start + seg.pct)}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          ))}
          <text x={cx} y={cy - 6} textAnchor="middle" className={styles.centerTop}>
            {total}%
          </text>
          <text x={cx} y={cx + 12} textAnchor="middle" className={styles.centerBottom}>
            Total
          </text>
        </svg>
      </div>
      <div className={styles.legend}>
        {segments.map((seg, i) => (
          <div key={i} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: seg.color }} />
            <span className={styles.legendLabel}>{seg.label}</span>
            <span className={styles.legendValue}>{seg.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
