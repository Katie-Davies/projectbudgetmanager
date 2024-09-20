import { renderWithRouter } from '../../Test/setup'
import { describe, it, expect } from 'vitest'

describe('<App />', () => {
  it('should render a button called report', async () => {
    //ACT

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = renderWithRouter('/')

    const reportButton = screen.getByRole('button', { name: /report/i })
    expect(reportButton).toBeInTheDocument()
  })
})
