import { useState } from "react";

function Nav({ changeMode }) {
    return (
        <div>
            <button onClick={changeMode} >{edit ? "View" : "Edit"}</button>
        </div>
    )
}