import type { Metadata } from 'next';
import './globals.css';
import { OKRProvider } from '@/contexts/OKRContext';
import { AlertProvider } from '@/contexts/AlertContext';

export const metadata: Metadata = {
  title: 'Painel de OKRs',
  description: 'Gerencia e cria OKRs da América Senior',
  icons: {
    icon: '/favicon.webp'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className='p-5'>
        <AlertProvider>
          <OKRProvider>
            {children}
          </OKRProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
