import { useState } from 'react';
import { stages } from '@/lib/mockData';
import { useATS } from '@/context/ATSContext';
import { Star, Sparkles } from 'lucide-react';
import styles from './PipelinePage.module.css';
import type { Candidate, StageId } from '@/types';

export default function PipelinePage() {
  const { candidates, moveCandidate } = useATS();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overStage, setOverStage] = useState<StageId | null>(null);

  const onDragStart = (id: string) => setDraggingId(id);
  const onDragOver = (e: React.DragEvent, stage: StageId) => {
    e.preventDefault();
    setOverStage(stage);
  };
  const onDrop = (stage: StageId) => {
    if (draggingId) moveCandidate(draggingId, stage);
    setDraggingId(null);
    setOverStage(null);
  };

  const byStage = (id: StageId) => candidates.filter((c) => c.stage === id);

  return (
    <div className={styles.page}>
      <p className={styles.hint}>
        Drag candidate cards between columns to update their stage. Workflow automations will trigger notifications & tasks.
      </p>
      <div className={styles.board}>
        {stages.map((stage) => {
          const items = byStage(stage.id);
          return (
            <div
              key={stage.id}
              className={[styles.column, overStage === stage.id ? styles.columnOver : ''].join(' ')}
              onDragOver={(e) => onDragOver(e, stage.id)}
              onDragLeave={() => setOverStage(null)}
              onDrop={() => onDrop(stage.id)}
            >
              <div className={styles.colHeader}>
                <span className={styles.dot} style={{ background: stage.color }} />
                <span className={styles.colName}>{stage.name}</span>
                <span className={styles.colCount}>{items.length}</span>
              </div>
              <div className={styles.cards}>
                {items.map((c: Candidate) => (
                  <div
                    key={c.id}
                    className={styles.card}
                    draggable
                    onDragStart={() => onDragStart(c.id)}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.avatar}>{c.avatar}</div>
                      <div className={styles.cardInfo}>
                        <p className={styles.cardName}>{c.name}</p>
                        <p className={styles.cardRole}>{c.jobTitle}</p>
                      </div>
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.match}>
                        <Sparkles size={11} /> {c.matchScore}%
                      </span>
                      <span className={styles.stars}>
                        <Star size={11} fill="#f79c4f" stroke="#f79c4f" /> {c.rating}
                      </span>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <div className={styles.empty}>No candidates</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
