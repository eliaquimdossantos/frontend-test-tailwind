'use client';

import { useForm, useFieldArray, UseFormReset } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Form from '@/components/molecules/Form';
import { FormField } from '@/components/molecules/Form/FormField';
import IconButton from '@/components/atoms/IconButton';
import DeleteIcon from '@/components/atoms/DeleteIcon';
import LinkButton from '@/components/atoms/LinkButton';
import AddIcon from '@/components/atoms/AddIcon';
import UpsertKeyResult from '@/interfaces/UpserKeyResult';
import { useState } from 'react';

const keyResultSchema = z.object({
  name: z.string().min(3, 'Você precisa informar um resultado-chave'),
  deliveries: z.array(
    z.object({
      name: z.string().min(4, 'Você precisa informar a entrega'),
      value: z.coerce
        .number({ invalid_type_error: 'O valor deve ser um número entre 1 e 100' })
        .min(0, 'Valor mínimo é 0')
        .max(100, 'Valor máximo é 100')
        .transform((val) => val.toString()),
    })
  ),
});

type KeyResultSchema = z.infer<typeof keyResultSchema>;

interface KeyResultFormProps {
  onSubmit: (data: KeyResultSchema, reset: UseFormReset<UpsertKeyResult>) => Promise<void>;
  initialData?: UpsertKeyResult
}

const propsInitialData = {
  name: '',
  deliveries: [{ name: '', value: '0' }],
};

export default function FormKeyResult({ onSubmit, initialData = propsInitialData }: KeyResultFormProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KeyResultSchema>({
    resolver: zodResolver(keyResultSchema),
    defaultValues: initialData
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'deliveries',
  });

  const [waitingSubmit, setWaitingSubmit] = useState(false);

  return (
    <Form onSubmit={handleSubmit(async (data) => {      
      setWaitingSubmit(true);
      await onSubmit(data, reset);
      setWaitingSubmit(false);
    })}>
      <div>
        <Form.Field
          placeholder="Digite o Resultado-Chave"
          {...register('name')}
          error={errors.name?.message}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Entregas:</h3>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <div className="flex flex-1 flex-wrap gap-2 items-start">
              <div className="flex-auto md:flex-[7]">
                <Form.Field
                  placeholder="Digite a Entrega"
                  {...register(`deliveries.${index}.name`)}
                  error={errors.deliveries?.[index]?.name?.message}
                />
              </div>
              <div className="flex-auto md:flex-[2]">
                <FormField
                  type="number"
                  placeholder="Valor (%)"
                  {...register(`deliveries.${index}.value`)}
                  error={errors.deliveries?.[index]?.value?.message}
                />
              </div>
            </div>

            <IconButton
              variant="danger"
              icon={<DeleteIcon />}
              onClick={() => remove(index)}
              className="ml-auto mt-2"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <LinkButton onClick={() => append({ name: '', value: '0' })} variant="secondary">
          <div className="flex gap-1">
            <AddIcon />
            <span>Adicionar Entrega</span>
          </div>
        </LinkButton>
      </div>

      <Form.Button disabled={waitingSubmit} variant="primary">Salvar</Form.Button>
    </Form>
  );
}
