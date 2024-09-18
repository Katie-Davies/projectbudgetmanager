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
    onError: (error: any) => {
      // Handle error in case of budget exceeding or any other issues
      if (error.response?.status === 400) {
        return error.response?.data?.message || 'Budget limit exceeded.'
      }
      return 'An error occurred.'
    },
  })
}

export default useUpdateProject
