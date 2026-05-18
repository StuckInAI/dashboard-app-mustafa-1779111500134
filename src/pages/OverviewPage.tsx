import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import { statCards, recentActivity, applicationsOverTime, sourcesBreakdown } from '@/lib/mockData';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <Card title="Applications Over Time" subtitle="Last 7 weeks">
          <BarChart data={applicationsOverTime} />
        </Card>
        <Card title="Candidate Sources" subtitle="Where applicants come from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Latest updates from your team">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
