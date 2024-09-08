import React from 'react'

import '../App.css'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleCreateClick = () => {
    navigate('/createproject')
  }
  return (
    <div className="App flex justify-center flex-grow">
      <div className="flex justify-center w-1/2 content-around flex-wrap">
        <div>
          <h1 className="text-5xl font-bold m-3 text-center">
            ACME PROJECT MANAGEMENT
          </h1>
          <p>
            A simple app for creating project and logging hours against them.
          </p>
        </div>
        <div className="flex justify-around mt-7 w-3/4 flex-wrap">
          <Button className="m-3">New Project</Button>
          <Button className="m-3">Log Time</Button>
        </div>
      </div>
    </div>
  )
}

export default App
