import NavBar from "../NavBar";
import Hero from "../Hero";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './HomePage.css'
import Bulletin from "../Bulletin.jsx"

function HomePage() {
    return (
        <div>
            <NavBar />
            <Jumbotron>
                <h1 class={"home-header"}>University of Florida Statistics Club</h1>
            <Hero />
            </Jumbotron>
            <Bulletin />

        </div>
    )
}

export default HomePage;