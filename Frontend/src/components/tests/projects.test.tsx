//@vitest-environment jsdom
import { renderWithQuery } from '../../Test/setup'
import { describe, it, expect } from 'vitest'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import nock from 'nock'
import AllProjects from '../../pages/AllProjects'

describe('<AllProjects />', () => {
  it('should render a loading indicator', async () => {
    //ARRANGE
    //'nock the HTTP call
    const scope = nock('http://localhost:5143')
      .get('/projects')
      .reply(200, [
        {
          ProjectId: 1,
          ProjectName: 'Disney',
          ProjectOwner: 'Kate',
          Budget: 100000,
          UsedBudget: 50000,
          HourlyRate: 150,
        },
        {
          ProjectId: 2,
          ProjectName: 'Education',
          ProjectOwner: 'Kate',
          Budget: 70000,
          UsedBudget: 40000,
          HourlyRate: 140,
        },
        {
          ProjectId: 3,
          ProjectName: 'Coke',
          ProjectOwner: 'Kate',
          Budget: 40000,
          UsedBudget: 30000,
          HourlyRate: 130,
        },
        {
          ProjectId: 4,
          ProjectName: 'Marvel',
          ProjectOwner: 'Kate',
          Budget: 60000,
          UsedBudget: 10000,
          HourlyRate: 160,
        },
      ])
    //ACT
    //render the app
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = renderWithQuery(<AllProjects />)
    const loading = await screen.findByText('Loading...')
    //ASSERT
    await waitFor(() => {
      expect(scope.isDone()).toBe(true)
    })
    expect(loading).toBeVisible()
  })
  it('should render and Error message', async () => {
    //ARRANGE
    //'nock the HTTP call
    const scope = nock('http://localhost:5143').get('/projects').reply(400)
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = renderWithQuery(<AllProjects />)
    const error = await screen.findByText('Error fetching data')

    //ASERTION
    expect(error).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
