import Card from '../molecules/Card';
import Skeleton from '@/components/atoms/Skeleton';

export default function CardObjectiveSkeleton() {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <Card>
        <Card.Body>
          <Skeleton className="h-6 w-2/3 mb-3" /> 
          <Skeleton className="h-3 w-full rounded-full" /> 
        </Card.Body>
        <Card.Divider>Resultados-Chave</Card.Divider>
        <Card.Body>
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-5/6 mb-2" />
          <Skeleton className="h-5 w-4/6" />
        </Card.Body>
      </Card>
      <div className="flex justify-end">
        <Skeleton className="h-8 w-40" /> 
      </div>
    </div>
  );
}
