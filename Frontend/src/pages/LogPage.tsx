import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function LogPage() {
  const fakeData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

  console.log('logpage')

  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/allprojects')

    console.log('allprojects')
  }
  return (
    <div className="flex flex-grow flex-col flex-wrap content-center">
      <h1 className="text-4xl m-5">Log Time</h1>
      <form className="flex flex-col">
        <label htmlFor="dropwdown"> PROJECT:</label>
        <select name="dropdown" id="dropdown">
          <option value="">--Select an option--</option>
          {fakeData.map((data) => (
            <option value={data} key={data}>
              {data}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Hours"
          className="m-3 border-solid border-2 border-gray-300 focus:outline-customBlue h-10 placeholder:p-3"
        />
      </form>
      <Button onClick={(e) => handleClick(e)} className="w-1/6 ">
        View All
      </Button>
    </div>
  )
}

export default LogPage
