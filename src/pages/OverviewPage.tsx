import { statCards, recentActivity, sourcesBreakdown, applicationsTrend } from '@/lib/mockData';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import ActivityFeed from '@/components/ui/ActivityFeed';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <Card title="Applications Over Time" subtitle="Last 7 days">
          <BarChart data={applicationsTrend} height={220} />
        </Card>
        <Card title="Sources Breakdown" subtitle="Where candidates come from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Team updates and pipeline changes">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
