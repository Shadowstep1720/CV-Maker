import { useState } from "react"

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
                <label>Title:
                    < input
                        id="title"
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
            </div>
        )
    }
}

export default Section;