function AllProjects() {
  return (
    <div>
      <h1 className="text-4xl">All Projects</h1>
      <table className="table-auto border-collapse border border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">PROJECT NAME </th>
            <th className="border border-slate-300 p-3">PROJECT OWNER</th>
            <th className="border border-slate-300 p-3">BUDGET</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ">Disney </td>
            <td className="border border-slate-300 ">Kate</td>
            <td className="border border-slate-300 ">100,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default AllProjects
