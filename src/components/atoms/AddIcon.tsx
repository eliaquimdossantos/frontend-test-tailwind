import { twMerge } from 'tailwind-merge';

export default function AddIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <i className={twMerge('bi bi-plus-lg', className)} {...props} />;
}
