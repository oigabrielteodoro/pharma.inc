import React, { ReactNode } from 'react'

import { ThemeGlobalStyle } from './ThemeGlobalStyle'
import { ReactQueryWrapper } from './ReactQueryWrapper'

type Props = {
  children: ReactNode
}

export function AppConfiguration({ children }: Props) {
  return (
    <ReactQueryWrapper>
      {children}
      <ThemeGlobalStyle />
    </ReactQueryWrapper>
  )
}

export * from './fetcher'
export * from './ThemeGlobalStyle'
export * from './ReactQueryWrapper'
