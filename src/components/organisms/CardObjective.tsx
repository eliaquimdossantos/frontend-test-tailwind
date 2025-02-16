import { useMemo, useState } from 'react';
import Card from '../molecules/Card';
import ProgressBar from '../atoms/ProgressBar';
import Title from '../atoms/Title';
import AddIcon from '../atoms/AddIcon';
import KeyResultItem from '../molecules/KeyResultItem';
import LinkButton from '../atoms/LinkButton';
import { useKeyResults } from '@/context/OKRContext';
import Modal from '../molecules/Modal';
import FormCreateKeyResult from './FormCreateKeyResult';
interface CardObjectiveProps {
  name: string;
  okrId: string;
}

export default function CardObjective({ name, okrId }: CardObjectiveProps) {
  const keyResults = useKeyResults(okrId);

  const renderKeyResults = () => {
    if (keyResults.length >= 1) {
      return (<>{
        keyResults.map((resultKey) => (
          <KeyResultItem
            key={resultKey.id}
            deliveries={resultKey.deliveries}
            keyResultId={resultKey.id}
            okrId={okrId}
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

  const progress = useMemo(() => {
    const totalDeliveries = keyResults.flatMap((resultKey) => resultKey.deliveries);
    if (totalDeliveries.length === 0) return 0;

    const totalSum = totalDeliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
    const progressValue = Math.floor(totalSum / totalDeliveries.length);

    return progressValue;
  }, [keyResults]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-1 mb-4">
        <Card>
          <Card.Body>
            <Title>{name}</Title>
            <ProgressBar now={progress} />
          </Card.Body>
          <Card.Divider>Resultados-Chave</Card.Divider>
          <Card.Body>
            <div className="flex flex-col divide-y divide-gray-300">
              {renderKeyResults()}
            </div>
          </Card.Body>
        </Card>
        <div className="flex justify-end">
          <LinkButton onClick={() => setShowModal(true)}>
            <div className="flex gap-1">
              <AddIcon />
              <span>Adicionar Resultado-Chave</span>
            </div>
          </LinkButton>
        </div>
      </div>
      <Modal open={showModal} onClose={handleCloseModal} title="Criar Novo Resultado-Chave">
        <FormCreateKeyResult okrId={okrId} />
      </Modal>
    </>
  );
}
