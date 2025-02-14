import { useEffect, useState, useMemo } from 'react';
import Card, { CardDivider, CardBody } from '../molecules/Card';
import ProgressBar from '../atoms/ProgressBar';
import Title from '../atoms/Title';
import AddIcon from '../atoms/AddIcon';
import ResultKey from '../molecules/ResultKey';
import LinkButton from '../atoms/LinkButton';
import { Delivery } from '@/interfaces/Delivery';

interface ResultKeys {
  createdAt: string;
  name: string;
  deliveries: Delivery[];
  id: string;
  orkId: string;
}

interface CardObjectiveProps {
  name: string;
  id: string;
}

export default function CardObjective({ name, id }: CardObjectiveProps) {
  const [resultKeys, setResultKeys] = useState<ResultKeys[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchResultKeys = async () => {
      try {
        const api = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${api}/okrs/${id}/resultKeys`);
        const data = await response.json();
        setResultKeys(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchResultKeys();
  }, [id]);

  const progress = useMemo(() => {
    const totalDeliveries = resultKeys.flatMap((resultKey) => resultKey.deliveries);
    if (totalDeliveries.length === 0) return 0;

    const totalValue = totalDeliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
    const progressValue = totalValue / totalDeliveries.length;

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
