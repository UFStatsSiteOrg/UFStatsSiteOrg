import { Navbar, Nav} from "react-bootstrap";
import React, {Component} from 'react'



export default class NavBar extends Component {

    render () {
        return (
        <Navbar variant={"dark"} class="navbar navbar-light bg-light">
            {/* <Navbar.Brand href="/">
                <img
                    src = "tealLogo.png"
                    class={'img-fluid'}
                    alt=""
                    />
            </Navbar.Brand> */}

      
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    <Nav.Link href="/officers">Officers</Nav.Link>
                    <Nav.Link href="/polls">Polls</Nav.Link>
                    <Nav.Link href="/r">Use R</Nav.Link>
                    <Nav.Link href="/internships">Internships</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
        );
    }
}