'use client';

import KeyResult from '@/interfaces/KeyResult';
import { getOkr, getOkrs, getResultKeys, postOkrs, postResultKey, putResultKey } from '@/services/api';
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface OKR {
  id: string;
  name: string;
  keyResults: KeyResult[];
}

interface OKRContextType {
  okrs: OKR[];
  loading: boolean;
  fetchOkrs: () => Promise<void>;  
  createOkr: (data: Partial<OKR>) => Promise<boolean>;
  createKeyResult: (okrId: string, data: Partial<KeyResult>) => Promise<boolean>;
  updateKeyResult: (okrId: string, keyResultId: string, data: Partial<KeyResult>) => Promise<boolean>
}

const OKRContext = createContext<OKRContextType | undefined>(undefined);

export function OKRProvider({ children }: { children: ReactNode }) {
  const [okrs, setOkrs] = useState<OKR[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchOkrs = useCallback(async () => {
    if (okrs.length == 0) setLoading(true);
    const okrsData = await getOkrs();
    const keyResultsPromises = okrsData.map((okr) => getResultKeys(okr.id));

    const keyResults = await Promise.all(keyResultsPromises);

    // Associando os keyResults aos OKRs correspondentes
    const enrichedOkrs = okrsData.map((okr, index) => ({
      ...okr,
      keyResults: keyResults[index],
    }));

    setOkrs(enrichedOkrs);
    setLoading(false);
  }, [okrs.length]);

  useEffect(() => {
    fetchOkrs();
  }, [fetchOkrs]);

  const fetchOkr = async (okrId: string): Promise<void> => {    
    const okr = await getOkr(okrId);
    if (!okr) {      
      return;
    }
    const keyResults = await getResultKeys(okrId);
    setOkrs((prevOkrs) => prevOkrs.map((okr) => (okr.id === okrId ? { ...okr, keyResults } : okr)));    
  };

  const createOkr = async (data: Partial<OKR>) => {
    const response = await postOkrs(data);
    if (response) await fetchOkrs();
    return !!response;
  };

  const createKeyResult = async (okrId: string, data: Partial<KeyResult>) => {
    const response = await postResultKey(okrId, data);
    if (response) await fetchOkr(okrId);
    return !!response;
  };

  const updateKeyResult = async (okrId: string, keyResultId: string, data: Partial<KeyResult>) => {
    const response = await putResultKey(okrId, keyResultId, data);
    if (response) await fetchOkr(okrId);
    return !!response;
  };

  return (
    <OKRContext.Provider value={{
      okrs,
      loading,
      fetchOkrs,
      createOkr,
      createKeyResult,
      updateKeyResult,      
    }}>
      {children}
    </OKRContext.Provider>
  );
}

export function useOKRContext() {
  const context = useContext(OKRContext);
  if (!context) throw new Error('useOKRContext must be used within an OKRProvider');
  return context;
}