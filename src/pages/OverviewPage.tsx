import styles from './OverviewPage.module.css';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import Card from '@/components/ui/Card';
import { statCards, recentActivity, revenueChartData, trafficSources } from '@/lib/mockData';

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      {/* Stat Cards */}
      <div className={styles.statsGrid}>
        {statCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      {/* Charts Row */}
      <div className={styles.chartsRow}>
        <Card
          title="Revenue Overview"
          subtitle="Monthly revenue vs target"
          className={styles.revenueCard}
          action={
            <div className={styles.chartLegend}>
              <span className={styles.legendItem}>
                <span className={styles.dotBlue} /> Revenue
              </span>
              <span className={styles.legendItem}>
                <span className={styles.dotFaded} /> Target
              </span>
            </div>
          }
        >
          <BarChart data={revenueChartData} height={200} />
        </Card>

        <Card title="Traffic Sources" subtitle="Breakdown by channel" className={styles.trafficCard}>
          <DonutChart data={trafficSources} />
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="Recent Activity" subtitle="Latest actions across your platform">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
