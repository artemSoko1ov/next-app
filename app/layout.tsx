import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import '@/app/styles';
import { Providers } from '@/app/providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Providers>
          <main className="content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
