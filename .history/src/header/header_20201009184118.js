import React, { Component } from 'react';
import   "./headers.css"
import {Navbar, Nav, NavDropdown,Button,Dropdown} from 'react-bootstrap';
import { Card } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Routers from "../router/router"
  
class header extends Component {
    render() {
        return (
            <div>
                <Card className="py-4 pl-4">
                    <h2 className="text-danger">Divine GYM & Coaching </h2>
                    <h6 className="text-danger">Janghai Jaunpur U.P</h6>
                </Card>

                <Navbar bg="danger" variant="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-light">
                        <Nav.Link className="text-light pr-5" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/admission">Admissions</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/examination">Examinations</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Results</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Faculity</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Abouts</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Contacts</Nav.Link>

                        {/* <NavDropdown  className="text-light" title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}

                        {/* <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Routers> </Routers>

            </div>
        );
    }
}

export default header;
