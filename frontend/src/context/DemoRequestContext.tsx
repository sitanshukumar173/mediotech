import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import DemoRequestModal from '../components/DemoRequestModal';

interface DemoRequestContextValue {
  openDemoRequest: (productInterest?: string) => void;
}

const DemoRequestContext = createContext<DemoRequestContextValue | null>(null);

export function DemoRequestProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetProduct, setPresetProduct] = useState<string>('');

  const openDemoRequest = (productInterest?: string) => {
    setPresetProduct(productInterest || '');
    setIsOpen(true);
  };

  const value = useMemo(() => ({ openDemoRequest }), []);

  return (
    <DemoRequestContext.Provider value={value}>
      {children}
      <DemoRequestModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        presetProduct={presetProduct}
      />
    </DemoRequestContext.Provider>
  );
}

export function useDemoRequest() {
  const ctx = useContext(DemoRequestContext);
  if (!ctx) {
    throw new Error('useDemoRequest must be used within DemoRequestProvider');
  }
  return ctx;
}
