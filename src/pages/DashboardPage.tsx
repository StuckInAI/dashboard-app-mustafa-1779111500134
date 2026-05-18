import styles from './DashboardPage.module.css';
import StatCard from '@/components/ui/StatCard';
import ActivityFeed from '@/components/ui/ActivityFeed';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { statCards, recentActivity, hiringFunnel, sourcesBreakdown, interviews } from '@/lib/mockData';
import { useATS } from '@/context/ATSContext';
import { Calendar, Sparkles, Star } from 'lucide-react';

export default function DashboardPage() {
  const { candidates, tasks } = useATS();
  const topMatches = [...candidates].sort((a, b) => b.matchScore - a.matchScore).slice(0, 4);
  const upcoming = interviews.filter((i) => i.status === 'Scheduled').slice(0, 4);
  const openTasks = tasks.filter((t) => !t.done).slice(0, 4);

  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {statCards.map((card) => (
          <StatCard key={card.id} data={card} />
        ))}
      </div>

      <div className={styles.chartsRow}>
        <Card title="Hiring Funnel" subtitle="Candidates across active stages" className={styles.fullCol}>
          <BarChart data={hiringFunnel} height={220} />
        </Card>
        <Card title="Top Sources" subtitle="Where candidates come from">
          <DonutChart data={sourcesBreakdown} />
        </Card>
      </div>

      <div className={styles.threeCol}>
        <Card
          title="AI Top Matches"
          subtitle="Best candidate-job fit"
          action={<Sparkles size={16} color="var(--color-accent-purple)" />}
        >
          <ul className={styles.list}>
            {topMatches.map((c) => (
              <li key={c.id} className={styles.matchRow}>
                <div className={styles.avatar}>{c.avatar}</div>
                <div className={styles.matchInfo}>
                  <p className={styles.matchName}>{c.name}</p>
                  <p className={styles.matchMeta}>{c.jobTitle}</p>
                </div>
                <div className={styles.matchScore}>
                  <span className={styles.scoreValue}>{c.matchScore}%</span>
                  <span className={styles.scoreLabel}>match</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Upcoming Interviews" subtitle="Synced with Google Calendar" action={<Calendar size={16} color="var(--color-accent-blue)" />}>
          <ul className={styles.list}>
            {upcoming.map((i) => (
              <li key={i.id} className={styles.interviewRow}>
                <div className={styles.iCol}>
                  <p className={styles.iName}>{i.candidateName}</p>
                  <p className={styles.iMeta}>{i.jobTitle} · {i.type}</p>
                </div>
                <div className={styles.iDate}>
                  <p>{new Date(i.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</p>
                  <p className={styles.iTime}>{new Date(i.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="My Tasks" subtitle="Pending recruiter actions" action={<Star size={16} color="var(--color-accent-orange)" />}>
          <ul className={styles.list}>
            {openTasks.map((t) => (
              <li key={t.id} className={styles.taskRow}>
                <div className={styles.taskInfo}>
                  <p className={styles.taskTitle}>{t.title}</p>
                  <p className={styles.taskMeta}>{t.assignee} · due {t.due}</p>
                </div>
                <Badge variant={t.priority === 'High' ? 'error' : t.priority === 'Medium' ? 'warning' : 'neutral'}>
                  {t.priority}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Recent Activity" subtitle="Latest events from your team and AI assistant">
        <ActivityFeed items={recentActivity} />
      </Card>
    </div>
  );
}
