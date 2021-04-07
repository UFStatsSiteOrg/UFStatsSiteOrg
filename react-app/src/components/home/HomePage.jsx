import NavBar from "../NavBar";
import Jumbotron from 'react-bootstrap/Jumbotron'
import './HomePage.css'
import Bulletin from "../Bulletin.jsx"
import Img from '../logo.png'
import {Container, Row, Col} from "react-bootstrap";

function HomePage() {
    return (
        <div>

            <NavBar>

            </NavBar>


                <Jumbotron class="jumbotron">


                    </Jumbotron>
                <Row>
                    <Col>
                    <Bulletin/>
                    </Col>
                    </Row>
            <Container>


        </Container>

        </div>
    )
}

export default HomePage;