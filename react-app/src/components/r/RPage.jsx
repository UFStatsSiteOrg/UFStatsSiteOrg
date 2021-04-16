import NavBar from "../NavBar";
import React, {useState} from "react";
import Console from "./Console"
import Output from "./Output"
import "tailwindcss/tailwind.css"

function RPage() {

    const [output, setOutput] = useState("");

    return (
        <>
            <NavBar />
            <div class="h-screen container mx-auto flex flex-row">
                <div class="h-5/6 rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4">
                    <Console setOutput={setOutput}/>
                </div>
                <div class="h-5/6 rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4">
                    <Output output={output}/>
                </div>
            </div>
            
        </>
    )
}

export default RPage;