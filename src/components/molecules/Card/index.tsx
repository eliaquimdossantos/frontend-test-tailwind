import { twMerge } from 'tailwind-merge';
import { CardProps } from './CardProps';
import { CardBody } from './CardBody';
import { CardDivider } from './CardDivider';

function Card({ children, className, loading, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'block max-w-full p-0 bg-white shadow-sm border border-secondary rounded-lg',
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="p-4 space-y-4 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

Card.Body = CardBody;
Card.Divider = CardDivider;

export default Card;