import React, {useState} from "react";
import "tailwindcss/tailwind.css"

function Console() {

    const [ textValue, setTextValue ] = useState("");

    return (
        <>
            <textarea placeholder="Enter R Code" class="font-mono text-sm h-full resize-none focus:outline-none text-grey-darkest flex-1 p-2 m-1 bg-transparent"></textarea>
        </>
    )
}

export default Console;