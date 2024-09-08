import Button from '../components/Button'

function CreateProject() {
  console.log('createproject')
  return (
    <div className="flex flex-grow content-center  flex-col flex-wrap">
      <h1 className="text-4xl m-5">Create a Project</h1>
      <div>
        <form className="flex flex-col">
          <label htmlFor="projectName" className="ml-3">
            PROJECT NAME
          </label>
          <input
            type="text"
            placeholder="Enter Project Name"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
          <label htmlFor="projectOwner" className="ml-3">
            PROJECT OWNER
          </label>
          <input
            type="text"
            placeholder="Enter project Owner"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
          <label htmlFor="ProjectBudget" className="ml-3">
            BUDGET
          </label>
          <input
            type="text"
            placeholder="Enter Budget"
            className="m-3 border-solid border-2 border-gray-300 focus:outline-blue-500 h-10 placeholder:p-3"
          />
        </form>
        <div className="flex justify-center">
          <Button>Create</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateProject
