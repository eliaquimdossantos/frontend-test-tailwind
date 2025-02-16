import { twMerge } from 'tailwind-merge';

export default function DeleteIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <i className={twMerge('bi bi-trash', className)} {...props} />;
}