import { useEffect, useState, useMemo, useCallback } from 'react';
import Card, { CardDivider, CardBody } from '../molecules/Card';
import ProgressBar from '../atoms/ProgressBar';
import Title from '../atoms/Title';
import AddIcon from '../atoms/AddIcon';
import ResultKey from '../molecules/ResultKey';
import LinkButton from '../atoms/LinkButton';
import { ResultKeys } from '@/interfaces/ResultKeys';
import { getResultKeys } from '@/services/api';

interface CardObjectiveProps {
  name: string;
  id: string;
}

export default function CardObjective({ name, id }: CardObjectiveProps) {
  const [resultKeys, setResultKeys] = useState<ResultKeys[]>([]);

  const fetchResultKeys = useCallback(async () => {
    if (!id) return;
    const data = await getResultKeys(id);
    setResultKeys(data);
  }, [id]);

  useEffect(() => {
    fetchResultKeys();
  }, [fetchResultKeys]);

  const progress = useMemo(() => {
    const totalDeliveries = resultKeys.flatMap((resultKey) => resultKey.deliveries);
    if (totalDeliveries.length === 0) return 0;

    const totalSum = totalDeliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
    const progressValue = totalSum / totalDeliveries.length;

    return progressValue;
  }, [resultKeys]);

  return (
    <div className="flex flex-col gap-1 mb-4">
      <Card>
        <CardBody>
          <Title>{name}</Title>
          <ProgressBar now={progress} />
        </CardBody>
        <CardDivider>Resultados-Chave</CardDivider>
        <CardBody>
          {resultKeys.map((resultKey) => (
            <ResultKey
              key={resultKey.id}
              deliveries={resultKey.deliveries}
              id={resultKey.id}
              name={resultKey.name}
            />
          ))}
        </CardBody>
      </Card>
      <div className="flex justify-end">
        <LinkButton>
          <div className="flex gap-1">
            <AddIcon />
            <span>Adicionar Resultado-Chave</span>
          </div>
        </LinkButton>
      </div>
    </div>
  );
}
