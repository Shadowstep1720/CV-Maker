import { useState } from "react"
import SectionTitle from "./sectionTitle.jsx"
import SectionDescription from "./sectionDescription.jsx";

function Section({ edit }) {
    return (
        <div>
            <SectionTitle edit={edit} />
            <SectionDescription edit={edit} />
        </div>
    )
}

export default Section;