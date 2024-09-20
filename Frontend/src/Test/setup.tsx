import { cleanup, render } from '@testing-library/react'
import { beforeEach, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import routes from '../routes'

import { QueryClient, QueryClientProvider } from 'react-query'

beforeEach(cleanup)
expect.extend(matchers)

export function renderComponent(component: JSX.Element) {
  // const user = userEvent.setup()
  const renderResult = render(component)
  return renderResult
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [location] })
  const user = userEvent.setup()
  const renderResult = render(<RouterProvider router={router} />)

  return { user, ...renderResult }
}

export function renderWithQuery(component: JSX.Element) {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="/" element={component} />),
    {
      initialEntries: ['/'],
    }
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: {
      // NOTE: if we don't set this, then react-query will
      // retry requests during tests which may hide errors
      // when the test times out
      queries: { retry: false },
    },
  })
  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    ),
  }
}
