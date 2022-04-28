import React, { ReactNode } from 'react'

import { ThemeGlobalStyle } from './ThemeGlobalStyle'
import { QueryClientProvider } from './QueryClientProvider'

type Props = {
  children: ReactNode
}

export function AppConfiguration({ children }: Props) {
  return (
    <QueryClientProvider>
      {children}
      <ThemeGlobalStyle />
    </QueryClientProvider>
  )
}

export * from './ThemeGlobalStyle'
export * from './QueryClientProvider'
