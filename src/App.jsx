import { useState } from 'react'

import Section from './components/section';
import Nav from "./components/nav.jsx";
import Title from './components/title.jsx';

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
      <Nav changeMode={changeMode} edit={edit} />
      <Title edit={edit} />
      <Section edit={edit} />
    </>
  )
}

export default App
