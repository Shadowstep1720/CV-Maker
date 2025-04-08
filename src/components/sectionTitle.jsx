import { useState } from "react"

function SectionTitle({ edit }) {
    const [title, setTitle] = useState("")

    if (edit) {
        return (
            <div>
                <label>Section Title:
                    < input
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
            </div>
        )
    } else {
        return (
            <h2>{title === "" ? "(No Title)" : title}</h2>
        )
    }
}

export default SectionTitle;