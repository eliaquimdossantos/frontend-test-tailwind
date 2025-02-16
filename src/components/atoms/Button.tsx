import { HTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import clsx from 'clsx';
import { ButtonVariant } from '@/types/ButtonVariant';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const button = tv({
  base: 'px-3 py-1 text-md rounded-md transition-all border',
  variants: {
    variant: {
      'primary': 'bg-cyan-600 border-cyan-600 hover:bg-cyan-500 text-white',
      'secondary': 'bg-gray-600 border-gray-600 hover:bg-gray-500 text-dark-900',
      'danger': 'bg-red-600 border-red-600 hover:bg-red-500 text-white',
      'light': 'bg-gray-300 border-gray-300 hover:bg-gray-400 text-dark-900',
      'outline-primary': 'bg-transparent border border-cyan-700 text-cyan-700 hover:bg-cyan-600 hover:text-white',
      'outline-secondary': 'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-500 hover:text-white',
      'outline-danger': 'bg-transparent border border-red-600 text-red-600 hover:bg-red-500 hover:text-white',
      'outline-light': 'bg-transparent border border-gray-200 text-gray-600 hover:bg-gray-300 hover:text-black',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: 'primary',
      class: 'hover:bg-cyan-600 text-white',
    },
    {
      disabled: true,
      variant: 'secondary',
      class: 'hover:bg-gray-600',
    },
    {
      disabled: true,
      variant: 'danger',
      class: 'hover:bg-red-600',
    },
    {
      disabled: true,
      variant: 'light',
      class: 'hover:bg-gray-300',
    },
    {
      disabled: true,
      variant: 'outline-primary',
      class: 'hover:bg-transparent hover:text-cyan-600',
    },
    {
      disabled: true,
      variant: 'outline-secondary',
      class: 'hover:bg-transparent hover:text-gray-600',
    },
    {
      disabled: true,
      variant: 'outline-danger',
      class: 'hover:bg-transparent hover:text-red-600',
    },
    {
      disabled: true,
      variant: 'outline-light',
      class: 'hover:bg-transparent hover:text-gray-600',
    },
  ],
  defaultVariants: {
    variant: 'primary',
  },
});

export default function Button({ children, variant, disabled, className, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(button({ variant, disabled }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
