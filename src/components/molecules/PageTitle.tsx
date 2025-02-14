import React, { ReactNode } from 'react';
import SidebarIcon from '../atoms/SidebarIcon';

interface PageTitleProps {
  children: ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <div>
      <span className="text-gray-300">
        <SidebarIcon />
        <span className="mx-3">
          |
        </span>
      </span>
      <span className="font-semibold text-xl text-slate-600">{children}</span>
    </div>
  );
}
