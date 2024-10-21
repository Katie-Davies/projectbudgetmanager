import React from 'react'

import '../App.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.textContent
    if (buttonText === 'New Project') {
      navigate('/createproject')
    } else if (buttonText === 'Log Time') {
      navigate('/log')
    } else if (buttonText === 'Report') {
      navigate('/allprojects')
    }
  }

  return (
    <div className="App flex justify-center flex-grow">
      <div className="flex justify-center w-1/2 content-center flex-wrap">
        <div>
          <h1 className="text-5xl font-bold m-3 text-center mb-10">
            TRACKER
          </h1>
          <p>
            Contoso's internal project and time tracking app.
          </p>
        </div>
        <div className="flex justify-around mt-7 w-3/4 flex-wrap">
          <Button className="m-3" onClick={(e) => handleClick(e)}>
            New Project
          </Button>
          <Button className="m-3" onClick={(e) => handleClick(e)}>
            Log Time
          </Button>
          <Button onClick={(e) => handleClick(e)} className="m-3 ">
            Report
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
