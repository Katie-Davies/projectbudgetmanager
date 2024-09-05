import React from 'react'

import '../App.css'
import Button from '../components/Button'

function App() {
  return (
    <div className="App flex justify-center h-screen">
      <h1>Landing</h1>
      <div className="flex justify-around w-1/2">
        <Button>New Project</Button>
        <Button>Log Time</Button>
      </div>
    </div>
  )
}

export default App
