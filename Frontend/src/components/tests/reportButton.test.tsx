import { renderComponent, renderWithRouter } from '../../Test/setup'
import { describe, it, expect } from 'vitest'
import { waitFor } from '@testing-library/react'
import { screen } from '@testing-library/react'
import nock from 'nock'
import App from '../../pages/App'

describe('<App />', () => {
  it('should render a button called report', async () => {
    //ACT

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = renderWithRouter('/')

    const reportButton = screen.getByRole('button', { name: /report/i })
    expect(reportButton).toBeInTheDocument()
  })
})
