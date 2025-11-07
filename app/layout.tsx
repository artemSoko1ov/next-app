'use client';

import { ReactNode, useState } from 'react';
import { Header } from '@/widgets/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMouseGradient } from '@/shared/lib/hooks/useMouseGradient';
import '@/app/styles';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  useMouseGradient();

  return (
    <html lang="ru">
      <body>
        <QueryClientProvider client={client}>
          <Header />
          <main className="content">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
