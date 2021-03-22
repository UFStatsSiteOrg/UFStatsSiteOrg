import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import React, {Component} from 'react'


export default class NavBar extends Component {

    render () {
        return (
        <Navbar bg="primary" variant={"light"}>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/contact">Contacts</Nav.Link>
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