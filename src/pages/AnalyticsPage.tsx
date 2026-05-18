import { useState } from 'react';
import styles from './AnalyticsPage.module.css';
import Card from '@/components/ui/Card';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import { revenueChartData, trafficSources } from '@/lib/mockData';
import type { ChartDataPoint } from '@/types';

const periodData: Record<string, ChartDataPoint[]> = {
  '7d': [
    { label: 'Mon', value: 12000, secondaryValue: 9000 },
    { label: 'Tue', value: 15000, secondaryValue: 11000 },
    { label: 'Wed', value: 9000, secondaryValue: 7000 },
    { label: 'Thu', value: 18000, secondaryValue: 14000 },
    { label: 'Fri', value: 21000, secondaryValue: 17000 },
    { label: 'Sat', value: 14000, secondaryValue: 10000 },
    { label: 'Sun', value: 10000, secondaryValue: 8000 },
  ],
  '30d': revenueChartData,
  '90d': [
    { label: 'Wk1', value: 55000, secondaryValue: 43000 },
    { label: 'Wk2', value: 62000, secondaryValue: 49000 },
    { label: 'Wk3', value: 70000, secondaryValue: 56000 },
    { label: 'Wk4', value: 68000, secondaryValue: 53000 },
    { label: 'Wk5', value: 74000, secondaryValue: 60000 },
    { label: 'Wk6', value: 80000, secondaryValue: 65000 },
    { label: 'Wk7', value: 77000, secondaryValue: 61000 },
    { label: 'Wk8', value: 85000, secondaryValue: 70000 },
  ],
};

const kpiData = [
  { label: 'Page Views', value: '1.24M', delta: '+18.2%', positive: true },
  { label: 'Avg. Session', value: '3m 42s', delta: '+4.5%', positive: true },
  { label: 'Bounce Rate', value: '42.3%', delta: '-2.1%', positive: true },
  { label: 'New Sessions', value: '61.8%', delta: '-1.3%', positive: false },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className={styles.page}>
      {/* KPI Row */}
      <div className={styles.kpiRow}>
        {kpiData.map((kpi) => (
          <div key={kpi.label} className={styles.kpiCard}>
            <p className={styles.kpiLabel}>{kpi.label}</p>
            <p className={styles.kpiValue}>{kpi.value}</p>
            <p className={[styles.kpiDelta, kpi.positive ? styles.positive : styles.negative].join(' ')}>
              {kpi.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Revenue Chart with period selector */}
      <Card
        title="Revenue Trend"
        subtitle="Revenue vs target over time"
        action={
          <div className={styles.periodSelector}>
            {(['7d', '30d', '90d'] as const).map((p) => (
              <button
                key={p}
                className={[styles.periodBtn, period === p ? styles.periodActive : ''].join(' ')}
                onClick={() => setPeriod(p)}
              >
                {p}
              </button>
            ))}
          </div>
        }
      >
        <BarChart data={periodData[period]} height={220} />
      </Card>

      {/* Two column */}
      <div className={styles.twoCol}>
        <Card title="Traffic Sources" subtitle="Where your users come from">
          <DonutChart data={trafficSources} />
        </Card>

        <Card title="Top Pages" subtitle="Most visited pages this period">
          <div className={styles.pagesList}>
            {[
              { path: '/home', views: 42840, pct: 34 },
              { path: '/products', views: 31200, pct: 25 },
              { path: '/pricing', views: 18750, pct: 15 },
              { path: '/blog', views: 14100, pct: 11 },
              { path: '/about', views: 9320, pct: 7 },
              { path: '/contact', views: 6210, pct: 5 },
            ].map((page) => (
              <div key={page.path} className={styles.pageRow}>
                <span className={styles.pagePath}>{page.path}</span>
                <div className={styles.pageBar}>
                  <div
                    className={styles.pageBarFill}
                    style={{ width: `${page.pct}%` }}
                  />
                </div>
                <span className={styles.pageViews}>{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
