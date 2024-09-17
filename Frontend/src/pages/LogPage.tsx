import Button from '../components/Button'
import { ChangeEvent, useState } from 'react'
import useGetAllProjects from '../hooks/useGetAllProjects'
import useUpdateProject from '../hooks/useUpdateProject'
import { updateProject } from '../api/apiClient'

function LogPage() {
  const { data, isLoading, isError } = useGetAllProjects()
  const [project, setProject] = useState('')
  const [hours, setHours] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [usedBudget, setUsedBudget] = useState({
    projectId: 0,
    usedBudget: 0,
  })
  const updateProjectMutation = useUpdateProject()
  // const fakeData = { projectId: 13, usedBudget: 900 }
  // updateProject(fakeData)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>

  function selectUserLogin(e: ChangeEvent<HTMLSelectElement>): void {
    setProject(e.target.value)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setHours(Number(e.target.value))
  }

  function handleSubmit(): void {
    if (isNaN(Number(hours))) {
      setErrorMessage('Please enter a valid number')
      setHours(0)
      return
    } else {
      const chosenProject = data?.find((data) => data.projectName === project)
      console.log(chosenProject)
      if (chosenProject) {
        const used = chosenProject?.hourlyRate
          ? chosenProject.hourlyRate * hours
          : 0
        console.log(chosenProject.hourlyRate)
        const projectId = chosenProject?.projectId || 0
        const newUsedBudget = { projectId: projectId, usedBudget: used }
        setUsedBudget(newUsedBudget)
        console.log(chosenProject.projectId)
        console.log(newUsedBudget)
        updateProjectMutation.mutate(newUsedBudget)
      }
    }
    setProject('')
    setHours(0)
    setErrorMessage('')
  }

  return (
    <div className="flex flex-grow flex-col flex-wrap content-center">
      <h1 className="text-4xl m-5">Log Time</h1>
      <form className="flex flex-col">
        <label htmlFor="dropdown" className="m-3">
          PROJECT NAME:
        </label>
        <select
          name="dropdown"
          id="dropdown"
          value={project}
          className="border-solid border-2 border-gray-300 h-10 m-3"
          onChange={selectUserLogin}
        >
          <option value="">--Select an option--</option>
          {data?.map((data) => (
            <option value={data.projectName} key={data.projectId}>
              {data.projectName}
            </option>
          ))}
        </select>
        <label htmlFor="hours" className="m-3">
          TIME WORKED:
        </label>
        <input
          type="text"
          value={hours}
          placeholder="Hours"
          onChange={handleChange}
          className="m-3 border-solid border-2 border-gray-300 focus:outline-customBlue h-10 placeholder:p-3"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
      <div className="flex justify-center flex-col flex-wrap content-center m-3">
        <Button className="m-4" onClick={handleSubmit}>
          LOG TIME
        </Button>
      </div>
    </div>
  )
}

export default LogPage
