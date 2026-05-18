import { useState, useMemo } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { stages } from '@/lib/mockData';
import { useATS } from '@/context/ATSContext';
import { Star, Sparkles, Mail, FileText, Search } from 'lucide-react';
import styles from './CandidatesPage.module.css';
import type { Candidate } from '@/types';

export default function CandidatesPage() {
  const { candidates } = useATS();
  const [search, setSearch] = useState('');
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [selected, setSelected] = useState<Candidate | null>(candidates[0] ?? null);

  const filtered = useMemo(() => {
    return candidates.filter((c) => {
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        c.jobTitle.toLowerCase().includes(search.toLowerCase());
      const matchStage = stageFilter === 'all' || c.stage === stageFilter;
      return matchSearch && matchStage;
    });
  }, [candidates, search, stageFilter]);

  const stageOf = (id: string) => stages.find((s) => s.id === id);

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={15} className={styles.searchIcon} />
          <input
            placeholder="Search by name, skill, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className={styles.select}
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option value="all">All Stages</option>
          {stages.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.layout}>
        <Card className={styles.listCard} title={`Candidates (${filtered.length})`} subtitle="Sorted by AI match score">
          <div className={styles.candidateList}>
            {filtered.sort((a, b) => b.matchScore - a.matchScore).map((c) => {
              const stage = stageOf(c.stage);
              return (
                <button
                  key={c.id}
                  className={[styles.candidate, selected?.id === c.id ? styles.candidateActive : ''].join(' ')}
                  onClick={() => setSelected(c)}
                >
                  <div className={styles.avatar}>{c.avatar}</div>
                  <div className={styles.cInfo}>
                    <p className={styles.cName}>{c.name}</p>
                    <p className={styles.cRole}>{c.jobTitle}</p>
                    <div className={styles.cTags}>
                      <span className={styles.stagePill} style={{ background: (stage?.color || '#888') + '22', color: stage?.color }}>
                        {stage?.name}
                      </span>
                      <span className={styles.rating}>
                        <Star size={11} fill="#f79c4f" stroke="#f79c4f" /> {c.rating}
                      </span>
                    </div>
                  </div>
                  <div className={styles.score}>
                    <span>{c.matchScore}%</span>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {selected && (
          <Card className={styles.detailCard}>
            <div className={styles.detailHeader}>
              <div className={styles.avatarLg}>{selected.avatar}</div>
              <div className={styles.detailMain}>
                <h2 className={styles.detailName}>{selected.name}</h2>
                <p className={styles.detailMeta}>{selected.jobTitle} · {selected.location}</p>
                <div className={styles.detailBadges}>
                  <Badge variant="info">{selected.experience} yrs exp</Badge>
                  <Badge variant="success">{selected.matchScore}% match</Badge>
                  <Badge variant="neutral">{selected.source}</Badge>
                </div>
              </div>
              <div className={styles.actions}>
                <button className={styles.actionBtn}><Mail size={14} /> Email</button>
                <button className={styles.actionBtn}><FileText size={14} /> Resume</button>
              </div>
            </div>

            <div className={styles.aiBox}>
              <div className={styles.aiTitle}>
                <Sparkles size={14} color="var(--color-accent-purple)" /> AI Summary
              </div>
              <p className={styles.aiText}>
                {selected.aiSummary ||
                  `${selected.name} brings ${selected.experience} years of experience with strong proficiency in ${selected.skills.slice(0, 3).join(', ')}. Sourced via ${selected.source}, the profile shows a ${selected.matchScore}% match against the ${selected.jobTitle} requirements.`}
              </p>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Skills</h4>
              <div className={styles.skills}>
                {selected.skills.map((s) => (
                  <span key={s} className={styles.skill}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Contact</h4>
              <p className={styles.contactLine}>📧 {selected.email}</p>
              <p className={styles.contactLine}>📍 {selected.location}</p>
              <p className={styles.contactLine}>📅 Applied {selected.appliedDate}</p>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>
                <Sparkles size={13} color="var(--color-accent-purple)" /> AI Interview Questions
              </h4>
              <ul className={styles.qList}>
                <li>Walk me through a challenging project involving {selected.skills[0]}.</li>
                <li>How do you approach trade-offs between speed and quality in shipping?</li>
                <li>Describe how you'd architect a feature for {selected.jobTitle.toLowerCase()}.</li>
              </ul>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
