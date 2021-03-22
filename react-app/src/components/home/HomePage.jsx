import NavBar from "../NavBar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './HomePage.css'
function HomePage() {
    return (
        <div>

            <NavBar />
            <Jumbotron>
                <h1 class={"home-header"}>University of Florida Statistics Club</h1>

            </Jumbotron>
      
        </div>
    )
}

export default HomePage;