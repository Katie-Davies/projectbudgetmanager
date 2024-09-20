import { renderWithRouter } from '../../Test/setup'
import { describe, it, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'

describe('<App />', () => {
  it('should render a button called report', async () => {
    //ACT

    // eslint-disable-next-line testing-library/render-result-naming-convention
    renderWithRouter('/')

    const reportButton = screen.getByRole('button', { name: /report/i })
    expect(reportButton).toBeInTheDocument()
  })
  it.skip('should navigate to allprojects page when clicked', async () => {
    //ACT
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const { user } = renderWithRouter('/')
    const reportButton = screen.getByRole('button', { name: /report/i })

    //ASSERT
    expect(reportButton).toBeInTheDocument()
    //ACT
    await user.click(reportButton)
    //ASSERT
    await waitFor(() => {
      expect(window.location.pathname).toBe('/allprojects')
    })
  })
})
