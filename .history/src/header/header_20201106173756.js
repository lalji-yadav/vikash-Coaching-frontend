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
                        <Nav.Link className="text-light pr-5" as={Link} to="/results">Results</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/faculity">Faculity</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Gallery</Nav.Link>
                        <Nav.Link className="text-light pr-5" as={Link} to="/service">Contacts</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Routers> </Routers>

            </div>
        );
    }
}

export default header;
