import { useMemo } from 'react';
import Card, { CardDivider, CardBody } from '../molecules/Card';
import ProgressBar from '../atoms/ProgressBar';
import Title from '../atoms/Title';
import AddIcon from '../atoms/AddIcon';
import KeyResultItem from '../molecules/KeyResultItem';
import LinkButton from '../atoms/LinkButton';
import { useKeyResults } from '@/context/OKRContext';

interface CardObjectiveProps {
  name: string;
  id: string;
}

export default function CardObjective({ name, id }: CardObjectiveProps) {
  const renderKeyResults = () => {
    if (resultKeys.length >= 1) {
      return (<>{
        resultKeys.map((resultKey) => (
          <KeyResultItem
            key={resultKey.id}
            deliveries={resultKey.deliveries}
            id={resultKey.id}
            name={resultKey.name}
          />
        ))
      }</>);
    } else {
      return (
        <div className='text-center mb-2'>
          <span className='text-sm text-red-600'>
            Ainda sem resultados-chave
          </span>
        </div>
      );
    }
  };

  const resultKeys = useKeyResults(id);

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
          {renderKeyResults()}
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
