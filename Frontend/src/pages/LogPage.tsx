import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function LogPage() {
  const fakeData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

  console.log('logpage')

  const navigate = useNavigate()

  return (
    <div className="flex flex-grow flex-col flex-wrap content-center">
      <h1 className="text-4xl m-5">Log Time</h1>
      <form className="flex flex-col">
        <label htmlFor="dropwdown" className="m-3">
          PROJECT NAME:
        </label>
        <select
          name="dropdown"
          id="dropdown"
          className="border-solid border-2 border-gray-300 h-10 m-3"
        >
          <option value="">--Select an option--</option>
          {fakeData.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
        <label htmlFor="hours" className="m-3">
          TIME WORKED:
        </label>
        <input
          type="text"
          placeholder="Hours"
          className="m-3 border-solid border-2 border-gray-300 focus:outline-customBlue h-10 placeholder:p-3"
        />
      </form>
      <div className="flex justify-center flex-col flex-wrap content-center m-3">
        <Button className="m-4">LOG TIME</Button>
        <p className="text-center">OR</p>
      </div>
    </div>
  )
}

export default LogPage
