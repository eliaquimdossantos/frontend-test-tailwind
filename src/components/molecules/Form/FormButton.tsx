import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '@/components/atoms/Button';
import { ButtonVariant } from '@/types/ButtonVariant';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariant;
}

export function FormButton({ children, variant, disabled = false, className, ...props }: FormButtonProps) {
  return (
    <Button
      variant={variant}
      type="submit"
      disabled={disabled}
      className={twMerge('w-100', className)}
      {...props}
    >
      {children}
    </Button>
  );
}
