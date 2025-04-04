import { useState } from 'react'
import './App.css'

function Section() {
  const [title, setTitle] = useState("");


  return (
    <div>
      <h1>{title}</h1>
      <h2>Section Items</h2>
    </div>
  )
}


function App() {

  return (
    <>
      <Section />
    </>
  )
}

export default App
