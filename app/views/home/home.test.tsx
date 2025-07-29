import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ViewHome from './home'

describe('ViewHome', () => {
  it('should render the authorized text', async () => {
    render(await ViewHome())

    const authorizedText = screen.getByText('authorized')
    expect(authorizedText).toBeInTheDocument()
  })

  it('should have correct CSS classes', async () => {
    const { container } = render(await ViewHome())

    const section = container.querySelector('section')
    expect(section).toHaveClass('flex', 'min-h-screen', 'flex-col')
  })

  it('should render the paragraph with correct styling', async () => {
    render(await ViewHome())

    const paragraph = screen.getByText('authorized')
    expect(paragraph).toHaveClass('text-sm', 'text-gray-500')
  })
})
