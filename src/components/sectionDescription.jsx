import { useState } from "react";

function sectionDescription({ edit }) {
    const [item, setItem] = useState("");
    const [description, setDescription] = useState("")
    if (edit) {
        return (
            <div>
                <label>Item:
                    < input
                        type='text'
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                    />
                </label>
                <label>Description: <br />
                    < textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        rows="4"
                        cols="50"
                    />
                </label>
            </div>
        )
    } else {
        return (
            <>
                <h3><li>{item === "" ? '(Click "Edit" to add item)' : item}</li></h3>
                <p>{description === "" ? '(Click "Edit" to add description)' : description}</p>
            </>
        )
    }
}

export default sectionDescription;