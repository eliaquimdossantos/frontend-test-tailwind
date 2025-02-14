import { twMerge } from 'tailwind-merge';

export default function SidebarIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <i className={twMerge('bi bi-layout-sidebar', className)} {...props} />;
}
