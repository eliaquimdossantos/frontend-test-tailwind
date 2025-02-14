interface DeliveryProps {
  name: string;
  value: number;
}

export default function DeliveryItem({ name, value }: DeliveryProps) {
  return (
    <div className="flex justify-between items-center my-3 text-gray-500">
      <span>{name}</span>
      <span>{value}%</span>
    </div>
  );
}
