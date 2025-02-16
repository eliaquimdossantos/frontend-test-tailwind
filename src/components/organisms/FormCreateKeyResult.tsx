import FormKeyResult from './FormKeyResult';
import { useKeyResultActions } from '@/hooks/useKeyResultActions';

export default function FormCreateKeyResult({ okrId }: { okrId: string }) {
  const { handleCreate } = useKeyResultActions();

  return <FormKeyResult onSubmit={(data, reset) => handleCreate(okrId, data, reset)} />;
}
