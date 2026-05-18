import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import { statCards, recentActivity, chartData, sourceData } from '@/lib/mockData';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      <div className={styles.chartsRow}>
        <Card
          title="Hiring Trend"
          subtitle="Applications vs hires over the last 7 periods"
          className={styles.chartCard}
        >
          <BarChart data={chartData} height={220} />
        </Card>
        <Card
          title="Candidate Sources"
          subtitle="Where applicants are coming from"
          className={styles.donutCard}
        >
          <DonutChart data={sourceData} />
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Latest updates from your team">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
