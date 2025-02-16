import { HTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import clsx from 'clsx';

interface LinkButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'light';
  disabled?: boolean;
  className?: string;
}

const linkButton = tv({
  base: 'bg-transparent border-none transition-all',
  variants: {
    variant: {
      primary: 'text-cyan-700 hover:underline',
      secondary: 'text-gray-700 hover:underline',
      danger: 'text-red-600 hover:underline',
      light: 'text-gray-400 hover:underline',
    },
    disabled: {
      true: 'opacity-50 hover:no-underline pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default function LinkButton({ children, variant, disabled = false, className, ...props }: LinkButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(linkButton({ variant, disabled }), className)}
    >
      {children}
    </button>
  );
}
