import Button from '../components/Button'

import { ChangeEvent, useState } from 'react'
import useCreateProject from '../hooks/useCreateProject'
import { useNavigate } from 'react-router-dom'
import useGetAllProjects from '../hooks/useGetAllProjects'

function CreateProject() {
  const { data, isLoading, isError } = useGetAllProjects()
  const createProject = useCreateProject()
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [budget, setBudget] = useState(0)
  const [rate, setRate] = useState(0)
  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const elName = e.target.name
    const elValue = e.target.value
    if (elName === 'name') setName(elValue)
    if (elName === 'owner') setOwner(elValue)
    if (elName === 'budget') setBudget(Number(elValue))
    if (elName === 'rate') setRate(Number(elValue))
  }

  function handleSubmit() {
    const nameCheck = data?.find((data) => data.projectName === name)
    if (nameCheck) {
      alert('Project name already exists')
      setName('')
      return
    }
    const project = {
      projectName: name,
      projectOwner: owner,
      budget: budget,
      hourlyRate: rate,
    }

    createProject.mutate(project)
    alert('Project Created')

    setName('')
    setOwner('')
    setBudget(0)
    setRate(0)
  }
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/allprojects')
  }

  return (
    <div className="flex flex-grow content-center  flex-col flex-wrap">
      <h1 className="text-4xl m-10">Create a Project</h1>
      <div>
        <form className="flex flex-col">
          <label htmlFor="projectName" className="ml-3">
            PROJECT NAME
          </label>
          <input
            name="name"
            value={name}
            type="text"
            onChange={handleChange}
            placeholder="Enter Project Name"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
          <label htmlFor="projectOwner" className="ml-3">
            PROJECT OWNER
          </label>
          <input
            name="owner"
            value={owner}
            onChange={handleChange}
            type="text"
            placeholder="Enter project Owner"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
          <label htmlFor="ProjectBudget" className="ml-3">
            BUDGET
          </label>
          <input
            name="budget"
            value={budget}
            onChange={handleChange}
            type="text"
            placeholder="Enter Budget"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
          <label htmlFor="ProjectRate" className="ml-3">
            HOURLY RATE
          </label>
          <input
            name="rate"
            value={rate}
            onChange={handleChange}
            type="text"
            placeholder="Enter Hourly Rate"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
        </form>
        <div className="flex justify-center">
          <Button onClick={handleSubmit} className="m-4">
            CREATE
          </Button>
        </div>
        <Button onClick={(e) => handleNavigate(e)} className="m-3 ">
          Report
        </Button>
      </div>
    </div>
  )
}

export default CreateProject
