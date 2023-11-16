import { PropsWithChildren } from 'react';

import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './QueryClient';

export function QueryClientProvider({ children }: PropsWithChildren) {
  return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>;
}
