import React, { ReactNode } from 'react'
import {
  QueryClientProvider as ReactQueryClientProvider,
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
      retry: import.meta.env.MODE === 'production' ? 3 : 0,
    },
  },
}

export function QueryClientProvider({
  children,
  client = new QueryClient(),
}: Props) {
  return (
    <ReactQueryClientProvider client={client}>
      {children}
    </ReactQueryClientProvider>
  )
}
