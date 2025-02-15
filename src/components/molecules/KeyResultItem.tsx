import React, { useMemo } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import Button from '../atoms/Button';
import PencilIcon from '../atoms/PencilIcon';
import DeliveryItem from './DeliveryItem';
import Title from '../atoms/Title';
import Delivery from '@/interfaces/Delivery';

interface ResultKeysProps {
  id: string;
  name: string;
  deliveries: Delivery[];
}

export default function KeyResultItem({ name, deliveries }: ResultKeysProps) {

  const progress = useMemo(() => {
    if (!deliveries || deliveries.length === 0) return 0;

    const totalSum = deliveries.reduce((sum, delivery) => sum + Number(delivery.value), 0);
    const progressValue = totalSum / deliveries.length;

    return progressValue;
  }, [deliveries]);

  return (
    <div>
      <Title>{name}</Title>
      <div className="flex items-center gap-2">
        <ProgressBar now={progress} />
        <Button variant="outline-light">
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
  );
}
