import React, { useMemo, useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import Button from '../atoms/Button';
import PencilIcon from '../atoms/PencilIcon';
import DeliveryItem from './DeliveryItem';
import Title from '../atoms/Title';
import Delivery from '@/interfaces/Delivery';
import Modal from './Modal';
import FormEditKeyResult from '../organisms/FormEditKeyResult';

interface ResultKeysProps {
  keyResultId: string;
  okrId: string;
  name: string;
  deliveries: Delivery[];
}

export default function KeyResultItem({ name, deliveries, okrId, keyResultId }: ResultKeysProps) {
  const [showModal, setShowModal] = useState(false);

  const progress = useMemo(() => {
    if (!deliveries || deliveries.length === 0) return 0;

    const totalSum = deliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
    const progressValue = Math.floor(totalSum / deliveries.length);

    return progressValue;
  }, [deliveries]);

  return (
    <>
      <div className="py-2">
        <Title>{name}</Title>
        <div className="flex items-center gap-2">
          <ProgressBar now={progress} />
          <Button variant="outline-light" onClick={() => setShowModal(true)}>
            <PencilIcon />
          </Button>
        </div>
        {deliveries.map((delivery, index) => (
          <DeliveryItem
            key={`${delivery.name}+${index}`}
            name={delivery.name}
            value={Number(delivery.value)}
          />
        ))}
      </div>
      <Modal title="Editar Resultado-Chave" open={showModal} onClose={() => setShowModal(false)}>
        <FormEditKeyResult keyResultId={keyResultId} okrId={okrId} />
      </Modal>
    </>
  );
}
