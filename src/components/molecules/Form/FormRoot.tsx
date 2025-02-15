import { HTMLAttributes, ReactNode } from 'react';

interface FormRootProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function FormRoot({ children, ...props }: FormRootProps) {
  return (
    <form className="flex flex-col gap-4" {...props}>
      {children}
    </form>
  );
}