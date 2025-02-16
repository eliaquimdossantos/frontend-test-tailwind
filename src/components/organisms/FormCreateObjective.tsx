'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Form from '@/components/molecules/Form';
import { useOKRs } from '@/context/OKRContext';
import { useAlert } from '@/context/AlertContext';


const createObjectiveSchema = z.object({
  name: z.string().min(4, 'Você precisa informar um objetivo'),
});

type CreateObjectiveSchema = z.infer<typeof createObjectiveSchema>;

const initialData = {
  name: '',
};

export default function FormCreateObjective() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateObjectiveSchema>({
    resolver: zodResolver(createObjectiveSchema),
    defaultValues: initialData
  });

  const { addAlert } = useAlert();
  const { createOkr } = useOKRs();

  const handleCreateObjective = async (data: CreateObjectiveSchema) => {
    const success = await createOkr(data);
    if (success) {
      reset();
      addAlert({ message: 'Resultado-chave criado com sucesso', variant: 'success' });
    } else {
      addAlert({ message: 'Erro ao criar resultado-chave', variant: 'error' });
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateObjective)}>
      <Form.Field
        label="Objetivo"
        placeholder="Digite o objetivo"
        {...register('name')}
        error={errors.name?.message}
      />

      <Form.Button variant="primary">Salvar</Form.Button>
    </Form>
  );
}
