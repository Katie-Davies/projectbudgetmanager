function CreateProject() {
  console.log('createproject')
  return (
    <div className="flex flex-grow">
      <h1>Create Project</h1>
      <div>
        <form>
          <input type="text" placeholder="Project name" />
          <input type="text" placeholder="Project Owner" />
          <input type="text" placeholder="Budget" />
        </form>
      </div>
    </div>
  )
}

export default CreateProject
