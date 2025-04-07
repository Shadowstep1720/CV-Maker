import { useState } from 'react'

import Section from './components/section';
import Nav from "./components/nav.jsx";

function App() {
  const [edit, setEdit] = useState(true)

  const changeMode = () => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }


  return (
    <>
      <Nav />
      <Section edit={edit} />
      <Section edit={edit} />
    </>
  )
}

export default App
