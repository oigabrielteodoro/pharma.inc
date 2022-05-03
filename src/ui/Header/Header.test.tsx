import React from 'react'

import { render, screen } from '__helpers__/app-tests'

import { Header } from '.'

describe('Header', () => {
  it('should be able render correctly', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { name: /pharma inc/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/user avatar/i)).toBeInTheDocument()
  })

  it('should be able snapshot is equal', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
