// routes.test.tsx
import { renderWithRouter } from '../../Test/setup'
import { describe, it, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'

describe('Routes', () => {
  it('renders App component for the root path', async () => {
    renderWithRouter('/')
    await waitFor(() => {
      expect(screen.getByText(/ACME PROJECT MANAGEMENT/i)).toBeInTheDocument()
    })
  })

  it('renders LogPage component for the /log path', async () => {
    renderWithRouter('/log')
    await waitFor(() => {
      expect(screen.getByText(/PROJECT NAME:/i)).toBeInTheDocument()
    })
  })

  it('renders AllProjects component for the /allprojects path', async () => {
    renderWithRouter('/allprojects')
    await waitFor(() => {
      expect(screen.getByText(/All Projects/i)).toBeInTheDocument()
    })
  })

  it('renders CreateProject component for the /createproject path', async () => {
    renderWithRouter('/createproject')
    await waitFor(() => {
      expect(screen.getByText(/Create a Project/i)).toBeInTheDocument()
    })
  })
})
