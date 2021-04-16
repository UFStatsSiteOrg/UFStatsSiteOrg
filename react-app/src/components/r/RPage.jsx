import NavBar from "../NavBar";
import React from "react";
import Console from "./Console"
import Output from "./Output"
import "tailwindcss/tailwind.css"

function RPage() {

    return (
        <>
            <NavBar />
            <div class="h-screen container mx-auto flex flex-row">
                <div class="h-full rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4">
                    <div class="items-center justify-between flex flex-row box__title bg-grey-lighter px-3 py-2 border-b">
                        <h3 class="text-sm text-grey-darker font-medium">Code</h3>
                        <button class="w-1/4 rounded-sm text-sm text-grey-darker font-medium p-1">Execute</button>
                    </div>
                    <Console/>
                </div>
                <div class="h-full rounded-lg bg-gray-500 bg-opacity-40 container flex flex-col py-4 px-6 m-4">
                <div class="box__title bg-grey-lighter px-3 py-2 border-b">
                        <h3 class="text-sm text-grey-darker font-medium">Output</h3>
                    </div>
                    <Output/>
                </div>
            </div>
            
        </>
    )
}

export default RPage;