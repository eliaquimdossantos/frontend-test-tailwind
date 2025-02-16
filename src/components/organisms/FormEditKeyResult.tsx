import { useEffect, useState } from 'react';
import FormKeyResult from './FormKeyResult';
import { useKeyResultActions } from '@/hooks/useKeyResultActions';
import UpsertKeyResult from '@/interfaces/UpserKeyResult';
import { getResultKey } from '@/services/api';

export default function FormEditKeyResult({ okrId, keyResultId }: { okrId: string, keyResultId: string }) {
  const { handleUpdate } = useKeyResultActions();
  const [initialData, setInitialData] = useState<UpsertKeyResult>();

  useEffect(() => {
    async function loadData() {
      // alert('carregou');
      const data = await getResultKey(okrId, keyResultId);
      setInitialData(data);
    }
    loadData();
  }, [keyResultId, okrId]);

  if (!initialData) return <p>Carregando...</p>;

  return <FormKeyResult initialData={initialData} onSubmit={(data) => handleUpdate(okrId, keyResultId, data)} />;
}
