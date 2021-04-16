import React, {useState} from "react";
import "tailwindcss/tailwind.css"

function Output({output}) {

    const out = output;

    return (
        <>
            <div class="box__title bg-grey-lighter px-3 py-2 border-b">
                <h3 class="text-sm text-grey-darker font-medium my-1">Output</h3>
            </div>
            <div class="font-mono text-sm h-full resize-none focus:outline-none text-grey-darkest flex-1 p-2 m-1 bg-transparent">{out}</div>
        </>
    )
}

export default Output;