import { twMerge } from 'tailwind-merge';
import Button from '@/components/atoms/Button';
import { HTMLAttributes, ReactNode } from 'react';
import { ButtonVariant } from '@/components/types/ButtonVariant';

interface FromButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariant
}

export function FormButton({ children, variant, className, ...props }: FromButtonProps) {
  return (
    <Button
      variant={variant}
      type="submit"
      className={twMerge('w-100', className)}
      {...props}
    >
      {children}
    </Button>
  );
}