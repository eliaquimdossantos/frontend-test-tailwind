import { twMerge } from 'tailwind-merge';
import { CardProps } from './CardProps';

export function CardDivider({ children, className, ...props }: CardProps) {
  return (
    <div className={twMerge('relative flex items-center my-2', className)} {...props}>
      <div className="flex-grow border-t border-secondary-300"></div>
      <span className="px-3 text-sm text-gray-500">{children}</span>
      <div className="flex-grow border-t border-secondary-300"></div>
    </div>
  );
}