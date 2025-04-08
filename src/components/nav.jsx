import { useState } from "react";

function Nav({ changeMode, edit }) {
    const reset = () => {
        const confirmReset = confirm("This action will delete all entered data.");
        if (confirmReset) {
            location.reload(true)
        } else {
            return
        }
    }

    return (
        <div>
            <button onClick={changeMode} >{edit ? "View" : "Edit"}</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default Nav; 