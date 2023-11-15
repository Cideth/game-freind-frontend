import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.scss';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
