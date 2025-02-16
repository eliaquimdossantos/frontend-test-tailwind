import { useAlert } from '@/contexts/AlertContext';
import UpsertKeyResult from '@/interfaces/UpserKeyResult';
import { UseFormReset } from 'react-hook-form';
import { useOKRs } from './useOKRs';

export function useKeyResultActions() {
  const { createKeyResult, updateKeyResult } = useOKRs();
  const { addAlert } = useAlert();

  const handleCreate = async (okrId: string, data: UpsertKeyResult, reset: UseFormReset<UpsertKeyResult>) => {
    const success = await createKeyResult(okrId, data);
    if (success) {
      addAlert({ message: 'Resultado-chave criado com sucesso', variant: 'success' });
      reset();
    } else {
      addAlert({ message: 'Erro ao criar resultado-chave', variant: 'error' });
    }
  };

  const handleUpdate = async (okrId: string, keyResultId: string, data: UpsertKeyResult) => {
    const success = await updateKeyResult(okrId, keyResultId, data);
    if (success) {
      addAlert({ message: 'Resultado-chave atualizado com sucesso', variant: 'success' });      
    } else {
      addAlert({ message: 'Erro ao atualizar resultado-chave', variant: 'error' });
    }
  };

  return { handleCreate, handleUpdate };
}
