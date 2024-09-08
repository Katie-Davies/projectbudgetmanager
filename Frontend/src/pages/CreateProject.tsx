function CreateProject() {
  console.log('createproject')
  return (
    <div className="flex flex-grow content-center  flex-col flex-wrap">
      <h1 className="text-4xl m-5">Create a Project</h1>
      <div>
        <form className="flex flex-col">
          <label htmlFor="projectName">PROJECT NAME</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="m-3 border-solid border-2 border-gray-300"
          />
          <label htmlFor="projectOwner">PROJECT OWNER</label>
          <input
            type="text"
            placeholder="Project Owner"
            className="m-3 border-solid border-2 border-gray-300"
          />
          <label htmlFor="ProjectBudget">BUDGET</label>
          <input
            type="text"
            placeholder="Budget"
            className="m-3 border-solid border-2 border-gray-300"
          />
        </form>
      </div>
    </div>
  )
}

export default CreateProject
