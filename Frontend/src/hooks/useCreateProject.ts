import { useMutation, useQueryClient } from 'react-query'
import { IProject } from '../../models/models'
import { createNewProject } from '../api/apiClient'

function useCreateProject() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: async (values: IProject) => createNewProject(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['projects'] })
    },
  })
}

export default useCreateProject
