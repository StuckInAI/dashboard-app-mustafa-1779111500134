import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import ActivityFeed from '@/components/ui/ActivityFeed';
import { statCards, recentActivity, hiringTrend, sourceBreakdown } from '@/lib/mockData';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      <div className={styles.chartsGrid}>
        <Card title="Hiring Trend" subtitle="Applications vs. hires over time">
          <BarChart data={hiringTrend} />
        </Card>
        <Card title="Candidate Sources" subtitle="Where applicants come from">
          <DonutChart data={sourceBreakdown} />
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Latest updates across your pipeline">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
