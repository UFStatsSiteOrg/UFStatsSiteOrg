import NavBar from "../NavBar";
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './OfficerPage.css'

function OfficerPage() {
    return (
        <div>
        <NavBar/>
        <Jumbotron className= "b py-16">
                <h1 className={"home-header font-semibold text-3xl"} >Statistics Club Officers</h1>
        </Jumbotron>
        <div class="grid gap-x-48 mx-auto flex space-x-4 gap-y-32 grid-cols-2 w-2/3">
            
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">President: Hunter Tomich</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Vice President: Kevin Kapadia</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Treasurer: Hannah McDonald</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Workshops Chair: Emily Zhang</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Social Chair: Lily Hernandez</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Tutoring Chairs: Jenn Dorrian and Kathy Kong</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Fundraising Chairs: Jake Shannin and Jordan Sutherland</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Workshops Chair: Emily Zhang</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Workshops Chair: Emily Zhang</h1>
        </div>
        <div className="mx-auto text-black w-full max-w-2xl w-2/3 rounded-xl bg-white p-8 shadow">
            <h1 className="text-black">Social Media Committee: Sam Anderman, Seth Lewertow, and Daniel Hopkins</h1>
        </div>
        </div>
       </div>
    )
}

export default OfficerPage;

{/* <div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">President: Hunter Tomich</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Vice President: Kevin Kapadia</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Treasurer: Hannah McDonald</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Secretary: Hadley Browder</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Workshops Chair: Emily Zhang</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Social Chair: Lily Hernandez</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Tutoring Chairs: Jenn Dorrian and Kathy Kong</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Fundraising Chairs: Jake Shannin and Jordan Sutherland</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Workshops Chair: Emily Zhang</h1>
</div>
<div className="mx-auto text-black w-full max-w-2xl rounded-m bg-white p-8 shadow">
<h1 className="text-black">Social Media Committee: Sam Anderman, Seth Lewertow, and Daniel Hopkins</h1>
</div>

</div> */}