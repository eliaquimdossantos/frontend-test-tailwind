import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardDivider({ children, className, ...props }: CardProps) {
  return (
    <div className={twMerge('relative flex items-center my-2', className)} {...props}>
      <div className="flex-grow border-t border-secondary-300"></div>
      <span className="px-3 text-sm text-gray-500">{children}</span>
      <div className="flex-grow border-t border-secondary-300"></div>
    </div>
  );
}

export function CardBody({ children, className, ...props }: CardProps) {
  return (
    <div className={twMerge('p-4', className)} {...props}>
      {children}
    </div>
  );
}

export default function Card({ children, className, ...props }: CardProps) {
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
