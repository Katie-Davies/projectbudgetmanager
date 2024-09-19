import { cleanup, render } from '@testing-library/react'
import { beforeEach, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { routes } from '../routes'

import { QueryClient, QueryClientProvider } from 'react-query'
