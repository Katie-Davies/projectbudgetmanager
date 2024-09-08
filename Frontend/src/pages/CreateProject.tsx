function CreateProject() {
  console.log('createproject')
  return (
    <div className="flex flex-grow">
      <h1>Create Project</h1>
      <div>
        <form>
          <input type="text" placeholder="Project name" />

          <input type="text" placeholder="Porject Owner" />
        </form>
      </div>
    </div>
  )
}

export default CreateProject
