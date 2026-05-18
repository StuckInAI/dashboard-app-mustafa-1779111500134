import Card from '@/components/ui/Card';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import StatCard from '@/components/ui/StatCard';
import { hiringFunnel, timeToHire, sourcesBreakdown } from '@/lib/mockData';
import styles from './AnalyticsPage.module.css';

const metrics = [
  { id: '1', title: 'Avg. Time to Hire', value: '24d', change: -12.0, changeLabel: 'vs last quarter', gradient: 'var(--gradient-blue)', icon: 'calendar' },
  { id: '2', title: 'Offer Acceptance', value: '87%', change: 4.2, changeLabel: 'vs last quarter', gradient: 'var(--gradient-green)', icon: 'award' },
  { id: '3', title: 'Cost per Hire', value: '$3,420', change: -8.5, changeLabel: 'vs last quarter', gradient: 'var(--gradient-purple)', icon: 'dollar' },
  { id: '4', title: 'Quality of Hire', value: '4.6/5', change: 6.1, changeLabel: 'vs last quarter', gradient: 'var(--gradient-red)', icon: 'chart' },
];

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {metrics.map((m) => <StatCard key={m.id} data={m} />)}
      </div>

      <div className={styles.row}>
        <Card title="Hiring Funnel" subtitle="Conversion across the recruitment process" className={styles.wide}>
          <BarChart data={hiringFunnel} height={240} />
        </Card>
        <Card title="Source Mix" subtitle="Where great candidates come from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>

      <Card
        title="Time to Hire Trend"
        subtitle="Days from application to offer accepted (target: 28d)"
        action={
          <div className={styles.legend}>
            <span className={styles.legendItem}><span className={styles.dotBlue} /> Actual</span>
            <span className={styles.legendItem}><span className={styles.dotFaded} /> Target</span>
          </div>
        }
      >
        <BarChart data={timeToHire} height={220} />
      </Card>
    </div>
  );
}
