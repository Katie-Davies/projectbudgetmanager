function AllProjects() {
  const data = [
    {
      projectName: 'Disney',
      projectOwner: 'Kate',
      budget: '100,000',
      remainingBudget: '50,000',
    },
    {
      projectName: 'Disney',
      projectOwner: 'Kate',
      budget: '70,000',
      usedBudget: '40,000',
      remainingBudget: '30,000',
    },
    {
      projectName: 'Disney',
      projectOwner: 'Kate',
      budget: '40,000',
      usedBudget: '30,000',
      remainingBudget: '10,000',
    },
    {
      projectName: 'Disney',
      projectOwner: 'Kate',
      budget: '60,000',
      usedBudget: '10,000',
      remainingBudget: '50,000',
    },
    {
      projectName: 'Disney',
      projectOwner: 'Kate',
      budget: '90,000',
      usedBudget: '40,000',
      remainingBudget: '50,000',
    },
  ]
  return (
    <div className="flex justify-start flex-col content-center flex-wrap flex-grow">
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
                <td className="border border-slate-300 p-2">
                  {project.usedBudget}
                </td>
                <td className="border border-slate-300 p-2">
                  {project.remainingBudget}
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
