function AllProjects() {
  const data = [
    { projectName: 'Disney', projectOwner: 'Kate', budget: '100,000' },
    { projectName: 'Disney', projectOwner: 'Kate', budget: '100,000' },
    { projectName: 'Disney', projectOwner: 'Kate', budget: '100,000' },
    { projectName: 'Disney', projectOwner: 'Kate', budget: '100,000' },
    { projectName: 'Disney', projectOwner: 'Kate', budget: '100,000' },
  ]
  return (
    <div className="flex justify-center flex-col content-center flex-wrap">
      <h1 className="text-4xl m-5 text-center">All Projects</h1>
      <table className="table-auto border-collapse border border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300 bg-customBlue text-white p-3">
              PROJECT NAME
            </th>
            <th className="border border-slate-300 p-3 bg-customBlue text-white">
              PROJECT OWNER
            </th>
            <th className="border border-slate-300 p-3 bg-customBlue text-white">
              BUDGET
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => {
            return (
              <tr key={project.projectName}>
                <td className="border border-slate-300 p-2">
                  {project.projectName}
                </td>
                <td className="border border-slate-300 p-2">
                  {project.projectOwner}
                </td>
                <td className="border border-slate-300 p-2">
                  {project.budget}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default AllProjects
