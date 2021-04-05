import NavBar from "../NavBar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './HomePage.css'
import Bulletin from "../Bulletin.jsx"
import Img from '../logo.png'
import {Container, Row, Col} from "react-bootstrap";

function HomePage() {
    return (
        <div>

            <NavBar />
            <Container>

                <Jumbotron>
                    <Row>

                        <Col xs={3}>
                        <figure>
                            <img src={Img} alt={"stats club logo"}/>
                        </figure>
                        </Col>
                        <Col xs={6}>
                            <h1 className="home-header">Welcome to the Home of the University of Florida Statistics Club</h1>
                        </Col>

                        </Row>
                    </Jumbotron>
                <Row>
                    <Col>
                    <Bulletin/>
                    </Col>
                    </Row>



        </Container>

        </div>
    )
}

export default HomePage;