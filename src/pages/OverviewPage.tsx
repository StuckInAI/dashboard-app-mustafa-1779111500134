import { statCards, recentActivity, sourcesBreakdown } from '@/lib/mockData';
import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import DonutChart from '@/components/ui/DonutChart';
import styles from './OverviewPage.module.css';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <StatCard key={stat.id} data={stat} />
        ))}
      </div>

      <div className={styles.grid}>
        <Card title="Recent Activity" subtitle="Latest updates from your team">
          <ActivityFeed items={recentActivity} />
        </Card>
        <Card title="Candidate Sources" subtitle="Where applicants are coming from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>
    </div>
  );
}
