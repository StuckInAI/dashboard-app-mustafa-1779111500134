import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Candidate, StageId, Task } from '@/types';
import { candidates as initialCandidates, tasks as initialTasks } from '@/lib/mockData';

type ATSContextValue = {
  candidates: Candidate[];
  moveCandidate: (id: string, stage: StageId) => void;
  tasks: Task[];
  toggleTask: (id: string) => void;
};

const ATSContext = createContext<ATSContextValue | undefined>(undefined);

export function ATSProvider({ children }: { children: ReactNode }) {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveCandidate = useCallback((id: string, stage: StageId) => {
    setCandidates((prev) => prev.map((c) => (c.id === id ? { ...c, stage } : c)));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }, []);

  return (
    <ATSContext.Provider value={{ candidates, moveCandidate, tasks, toggleTask }}>
      {children}
    </ATSContext.Provider>
  );
}

export function useATS() {
  const ctx = useContext(ATSContext);
  if (!ctx) throw new Error('useATS must be used within ATSProvider');
  return ctx;
}
