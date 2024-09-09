import { useQuery } from 'react-query'
import { getAllProjects } from '../api/apiClient'

export async function useGetAllProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => await getAllProjects(),
  })
}
