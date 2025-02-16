import { useOKRContext } from '@/contexts/OKRContext';

export function useKeyResults(okrId: string) {
  const { okrs } = useOKRContext();
  const okr = okrs.find((okr) => okr.id === okrId);
  return okr?.keyResults || [];
}
