import { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import clsx from 'clsx';

type IconButtonVariant =
  'primary' | 'secondary' | 'danger' | 'light';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode; 
  variant?: IconButtonVariant;
  disabled?: boolean;
  className?: string;
}

const iconButton = tv({
  base: 'px-2 transition-all text-xl',
  variants: {
    variant: {
      primary: 'text-cyan-600 hover:text-cyan-500',
      secondary: 'text-gray-600 hover:text-gray-500',
      danger: 'text-red-600 hover:text-red-500',
      light: 'text-gray-300 hover:text-gray-400',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default function IconButton({ icon, variant = 'primary', disabled, className, ...props }: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(iconButton({ variant, disabled }), className)}
      {...props}
    >
      {icon}
    </button>
  );
}
