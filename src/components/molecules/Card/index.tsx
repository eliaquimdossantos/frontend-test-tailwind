import { twMerge } from 'tailwind-merge';
import { CardProps } from './CardProps';
import { CardBody } from './CardBody';
import { CardDivider } from './CardDivider';

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'block max-w-full p-0 bg-white shadow-sm border border-secondary rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Body = CardBody;
Card.Divider = CardDivider;

export default Card;