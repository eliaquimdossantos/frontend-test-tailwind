import { twMerge } from 'tailwind-merge';
import { CardProps } from './CardProps';

export function CardBody({ children, className, loading, ...props }: CardProps) {
  return (
    <div className={twMerge('p-5', className)} {...props}>
      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}