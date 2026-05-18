import { createContext, useContext, useState, ReactNode } from 'react';

interface ATSContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const ATSContext = createContext<ATSContextType | undefined>(undefined);

export function ATSProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ATSContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </ATSContext.Provider>
  );
}

export function useATS() {
  const ctx = useContext(ATSContext);
  if (!ctx) throw new Error('useATS must be used within ATSProvider');
  return ctx;
}
