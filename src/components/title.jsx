import { useState } from "react";


function Title({ edit }) {
    const [name, setName] = useState("");

    return (
        <h1>{name}</h1>
    )
}

export default Title