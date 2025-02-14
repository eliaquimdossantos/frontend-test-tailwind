import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Title({ children, className, ...props }: TitleProps) {
  return (
    <span className={twMerge('text-lg text-slate-700 font-semibold', className)} {...props}>
      {children}
    </span>
  );
}
