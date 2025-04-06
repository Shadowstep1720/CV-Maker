import { useState } from 'react'

function Section({ edit }) {
  const [title, setTitle] = useState("")


  if (edit === false) {
    return (
      <div>
        <h2>{title === "" ? "(No Title)" : title}</h2>
        <ul>
          <li>Section Items</li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <label for="title">Title:</label>
        < input
          id="title"
          type='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
    )
  }
}


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
      <button onClick={changeMode} >{edit ? "View" : "Edit"}</button>
      <Section edit={edit} />
      <Section edit={edit} />
    </>
  )
}

export default App
