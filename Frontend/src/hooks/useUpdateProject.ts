import { useMutation, useQueryClient } from 'react-query'
import { IUpdateProject } from '../../models/models'
import { updateProject } from '../api/apiClient'

function useUpdateProject() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: async (values: IUpdateProject) => updateProject(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['projects'] })
    },
  })
}

export default useUpdateProject
