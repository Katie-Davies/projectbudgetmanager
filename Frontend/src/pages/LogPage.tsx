function LogPage() {
  const fakeData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

  console.log('logpage')
  return (
    <div className="flex flex-grow">
      <h1>LogPage</h1>
      <form>
        <label htmlFor="dropwdown"> Select your project:</label>
        <select name="dropdown" id="dropdown">
          <option value="">--Select an option--</option>
          {fakeData.map((data) => (
            <option value={data}>{data}</option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default LogPage
