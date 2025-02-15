'use client';
import KeyResult from '@/interfaces/KeyResult';
import { getOkrs, getResultKeys, postOkrs } from '@/services/api';
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface OKR {
  id: string;
  name: string;
  keyResults: KeyResult[];
}

interface OKRContextType {
  okrs: OKR[];
  fetchOkrs: () => Promise<void>;
  createOkr: (data: Partial<OKR>) => Promise<boolean>;
}

const OKRContext = createContext<OKRContextType | undefined>(undefined);

export function OKRProvider({ children }: { children: ReactNode }) {
  const [okrs, setOkrs] = useState<OKR[]>([]);

  const fetchOkrs = useCallback(async () => {
    const okrsData = await getOkrs();
    const keyResultsPromises = okrsData.map((okr) => getResultKeys(okr.id));

    const resultKeys = await Promise.all(keyResultsPromises);

    // Associando os keyResults aos OKRs correspondentes
    const enrichedOkrs = okrsData.map((okr, index) => ({
      ...okr,
      keyResults: resultKeys[index], // Adiciona os keyResults ao OKR
    }));    

    setOkrs(enrichedOkrs);
  }, []);

  useEffect(() => {
    fetchOkrs();
  }, [fetchOkrs]);

  const createOkr = async (data: Partial<OKR>) => {
    const response = await postOkrs(data);
    if (response) {
      await fetchOkrs();
      return true;
    } else {
      return false;
    }
  };

  return (
    <OKRContext.Provider value={{ okrs, fetchOkrs, createOkr }}>
      {children}
    </OKRContext.Provider>
  );
};

export function useOKRs() {
  const context = useContext(OKRContext);
  if (!context) throw new Error('useOKRs deve ser usado dentro de um OKRProvider');
  return context;
};

export function useKeyResults(okrId: string) {
  const context = useContext(OKRContext);
  if (!context) throw new Error('useKeyResults deve ser usado dentro de um OKRProvider');

  const okr = context.okrs.find((okr) => okr.id === okrId);
  return okr?.keyResults || [];
}