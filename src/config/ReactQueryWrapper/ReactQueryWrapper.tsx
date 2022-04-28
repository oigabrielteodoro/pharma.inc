import React, { ReactNode } from 'react'
import {
  QueryClientProvider,
  QueryClient,
  QueryClientConfig,
} from 'react-query'

type Props = {
  client?: QueryClient
  children: ReactNode
}

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: import.meta.env.MODE === 'production' ? 3 : 0,
    },
  },
}

export function ReactQueryWrapper({
  children,
  client = new QueryClient(),
}: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
