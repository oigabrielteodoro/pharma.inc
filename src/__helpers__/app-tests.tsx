import { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import nock from 'nock'

import { AppConfiguration } from 'config'

function render(ui: ReactElement) {
  return {
    ...rtlRender(ui, {
      wrapper: AppConfiguration,
    }),
  }
}

export * from '@testing-library/react'
export { render, userEvent, nock }
