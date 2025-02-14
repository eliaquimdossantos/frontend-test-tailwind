import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

export default function LinkButton({ children, disabled = false, className, ...props }: LinkButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={twMerge(
        'bg-transparent border-none text-cyan-600',
        disabled ? 'hover:no-underline opacity-50' : 'hover:underline',
        className
      )}
    >
      {children}
    </button>
  );
}
