import type { ReactNode } from 'react';
import { Header } from '@/widgets/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="content">{children}</main>
      </body>
    </html>
  );
}
