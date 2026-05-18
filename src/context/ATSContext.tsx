import { createContext, useContext, useState, ReactNode } from 'react';

interface ATSContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const ATSContext = createContext<ATSContextType | undefined>(undefined);

export function ATSProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <ATSContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </ATSContext.Provider>
  );
}

export function useATS() {
  const ctx = useContext(ATSContext);
  if (!ctx) throw new Error('useATS must be used within ATSProvider');
  return ctx;
}
