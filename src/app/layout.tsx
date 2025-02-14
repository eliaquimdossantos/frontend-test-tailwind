import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
