import { cleanup, render } from '@testing-library/react'
import { beforeEach, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import routes from '../routes'

import { QueryClient, QueryClientProvider } from 'react-query'

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp(location: string) {
  const user = userEvent.setup()
  const router = createMemoryRouter(routes, { initialEntries: [location] })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const container = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
  return { user, ...container }
}
