function AllProjects() {
  return (
    <div className="flex justify-center flex-col content-center flex-wrap">
      <h1 className="text-4xl m-5 text-center">All Projects</h1>
      <table className="table-auto border-collapse border border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300 bg-customBlue text-white p-3">
              PROJECT NAME{' '}
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
          <tr>
            <td className="border border-slate-300 p-2 ">Disney </td>
            <td className="border border-slate-300 p-2">Kate</td>
            <td className="border border-slate-300 p-2">100,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default AllProjects
