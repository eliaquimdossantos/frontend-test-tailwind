import type { Metadata } from 'next';
import './globals.css';
import { OKRProvider } from '@/context/OKRContext';
import { AlertProvider } from '@/context/AlertContext';

export const metadata: Metadata = {
  title: 'Painel de OKRs',
  description: 'Gerencia e cria OKRs da América Senior',
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
