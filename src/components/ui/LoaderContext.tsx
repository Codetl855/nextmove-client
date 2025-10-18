import { createContext, useContext, useState, ReactNode } from 'react';

interface LoaderContextType {
  active: boolean;
  show: () => void;
  hide: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(false);
  const show = () => setActive(true);
  const hide = () => setActive(false);
  return (
    <LoaderContext.Provider value={{ active, show, hide }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error('useLoader must be used within LoaderProvider');
  return ctx;
};
