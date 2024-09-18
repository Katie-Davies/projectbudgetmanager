import { useEffect, useState } from 'react'
import useGetAllProjects from '../hooks/useGetAllProjects'
import { IProject } from '../../models/models'

function AllProjects() {
  const { data: projects, isLoading, isError } = useGetAllProjects()

  const [sortedData, setSortedData] = useState<IProject[]>([])
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    if (projects) {
      setSortedData(projects)
    }
  }, [projects])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error fetching data</div>
  }

  const handleSort = () => {
    const sorted = [...sortedData].sort(
      (a, b) =>
        isSorted
          ? (a.remainingBudget ?? 0) - (b.remainingBudget ?? 0) // Ascending order if already sorted
          : (b.remainingBudget ?? 0) - (a.remainingBudget ?? 0) // Descending order
    )
    setSortedData(sorted)
    setIsSorted(!isSorted)
    console.log('sorted')
  }

  return (
    <div className="flex justify-start flex-col content-center flex-wrap flex-grow">
      <h1 className="text-4xl m-5 text-center">All Projects</h1>
      <button
        onClick={handleSort}
        className="bg-customBlue text-white p-2 m-2 rounded-md"
      >
        Order by remaining Budget
      </button>
      <table className="table-auto border-collapse border border-slate-400 m-5">
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
            <th className="border border-slate-300 p-3 bg-customBlue text-white">
              USED
            </th>
            <th className="border border-slate-300 p-3 bg-customBlue text-white">
              HOURLY RATE
            </th>
            <th className="border border-slate-300 p-3 bg-customBlue text-white">
              REMAINING
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((project) => {
            return (
              <tr key={project.projectName}>
                <td className="border border-slate-300 p-2">
                  {project.projectName}
                </td>
                <td className="border border-slate-300 p-2">
                  {project.projectOwner}
                </td>
                <td className="border border-slate-300 p-2 text-center ">
                  ${project.budget}
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  ${project.usedBudget}
                </td>
                <td className="border border-slate-300 p-2 text-center">
                  ${project.hourlyRate}
                </td>
                <td
                  className={`border border-slate-300  p-2 text-center ${
                    project.remainingBudget === 0
                      ? 'bg-red-800 bg-opacity-20'
                      : 'bg-green-800 bg-opacity-20'
                  }`}
                >
                  ${project.remainingBudget}
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
