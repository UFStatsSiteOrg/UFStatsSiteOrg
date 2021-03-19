import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import React, {Component} from 'react'


export default class NavBar extends Component {

    render () {
        return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/contact">Contacts</Nav.Link>
                    <Nav.Link href="/officers">Officers</Nav.Link>
                    <Nav.Link href="/polls">Polls</Nav.Link>
                    <Nav.Link href="/r">Use R</Nav.Link>
                    <Nav.Link href="/internships">Internships</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}