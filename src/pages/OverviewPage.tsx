import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import { statCards, recentActivity, hiringTrends, sourcesBreakdown } from '@/lib/mockData';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <Card title="Hiring Trends" subtitle="Applications vs hires over the last 6 months">
          <BarChart data={hiringTrends} />
        </Card>
        <Card title="Source Breakdown" subtitle="Where your candidates come from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Latest updates across your workspace">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
