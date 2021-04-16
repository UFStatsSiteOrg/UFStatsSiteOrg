import React, {useState} from "react";
import axios from 'axios';
import "tailwindcss/tailwind.css"

function Console({ setOutput }) {

    const [ textValue, setTextValue ] = useState("");

    const submit = async () => {
        console.log(textValue.split("\n"));
        let textArray = textValue.split("\n");
        let req = {
            method: 'post',
            url: `http://localhost:8080/api/submit`,
            headers:{
                'Content-Type': 'application/json'
            },
            data: {code : textArray}
        }
        try {
            console.log("Submitting...")
            const response = await axios(req);
            console.log(response);
            setTextValue("");
            setOutput(response.data.stdout);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div class="items-center justify-between flex flex-row box__title bg-grey-lighter px-3 py-2 border-b">
                <h3 class="text-sm text-grey-darker font-medium">Code</h3>
                <button class="w-1/4 rounded-sm text-sm text-grey-darker font-medium p-1"
                onClick={(e) => submit()}>Execute</button>
            </div>
            <textarea placeholder="Enter R Code" class="font-mono text-sm h-full resize-none focus:outline-none text-grey-darkest flex-1 p-2 m-1 bg-transparent"
            value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
        </>
    )
}

export default Console;