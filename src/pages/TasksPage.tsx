import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useATS } from '@/context/ATSContext';
import { Check } from 'lucide-react';
import styles from './TasksPage.module.css';

export default function TasksPage() {
  const { tasks, toggleTask } = useATS();
  const open = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <div className={styles.page}>
      <Card title={`Open Tasks (${open.length})`} subtitle="Reminders and recruiter to-dos">
        <ul className={styles.list}>
          {open.map((t) => (
            <li key={t.id} className={styles.row}>
              <button
                className={styles.checkbox}
                onClick={() => toggleTask(t.id)}
                aria-label="Mark task complete"
              />
              <div className={styles.info}>
                <p className={styles.title}>{t.title}</p>
                <p className={styles.meta}>{t.assignee} · due {t.due}{t.relatedTo ? ` · ${t.relatedTo}` : ''}</p>
              </div>
              <Badge variant={t.priority === 'High' ? 'error' : t.priority === 'Medium' ? 'warning' : 'neutral'}>
                {t.priority}
              </Badge>
            </li>
          ))}
        </ul>
      </Card>

      <Card title={`Completed (${done.length})`} subtitle="Recently closed tasks">
        <ul className={styles.list}>
          {done.map((t) => (
            <li key={t.id} className={[styles.row, styles.rowDone].join(' ')}>
              <button
                className={[styles.checkbox, styles.checkboxDone].join(' ')}
                onClick={() => toggleTask(t.id)}
              >
                <Check size={12} />
              </button>
              <div className={styles.info}>
                <p className={[styles.title, styles.titleDone].join(' ')}>{t.title}</p>
                <p className={styles.meta}>{t.assignee} · completed</p>
              </div>
            </li>
          ))}
          {done.length === 0 && <p className={styles.empty}>No completed tasks yet</p>}
        </ul>
      </Card>
    </div>
  );
}
