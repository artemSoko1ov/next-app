'use client';

import { ReactNode, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMouseGradient } from '@/shared/lib/hooks/useMouseGradient';

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());
  useMouseGradient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
