import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { ChangeEvent, useState } from 'react'

function LogPage() {
  const fakeData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const [login, setLogin] = useState('')
  const [hours, setHours] = useState(0)

  function selectUserLogin(e: ChangeEvent<HTMLSelectElement>): void {
    setLogin(e.target.value)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setHours(Number(e.target.value))
  }

  function handleSubmit(): void {
    console.log(login, hours)
  }

  return (
    <div className="flex flex-grow flex-col flex-wrap content-center">
      <h1 className="text-4xl m-5">Log Time</h1>
      <form className="flex flex-col">
        <label htmlFor="dropdown" className="m-3">
          PROJECT NAME:
        </label>
        <select
          name="dropdown"
          id="dropdown"
          value={login}
          className="border-solid border-2 border-gray-300 h-10 m-3"
          onChange={selectUserLogin}
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
          value={hours}
          placeholder="Hours"
          onChange={handleChange}
          className="m-3 border-solid border-2 border-gray-300 focus:outline-customBlue h-10 placeholder:p-3"
        />
      </form>
      <div className="flex justify-center flex-col flex-wrap content-center m-3">
        <Button className="m-4" onClick={handleSubmit}>
          LOG TIME
        </Button>
        <p className="text-center">OR</p>
      </div>
    </div>
  )
}

export default LogPage
