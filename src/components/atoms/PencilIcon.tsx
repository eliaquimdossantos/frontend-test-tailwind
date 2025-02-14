import { twMerge } from 'tailwind-merge';

export default function PencilIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <i className={twMerge('bi bi-pencil', className)} {...props} />;
}
