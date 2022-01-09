import React from 'react'
// import {HashLink as Link} from "react-router-hash-link"
// import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

export default function NavigationBar(){


    return(

        <React.Fragment>


            <Navbar fixed="top" bg="black" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Hafiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="#home"><span className="link-color">Home</span></Nav.Link>
                        <Nav.Link href="#work-experiences"><span className="link-color">Work Experiences</span></Nav.Link>
                        <Nav.Link href="#education"><span className="link-color">Education</span></Nav.Link>
                        <Nav.Link href="#projects"><span className="link-color">Projects</span></Nav.Link>
                        <Nav.Link href="#contact"><span className="link-color">Contact</span></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            

        </React.Fragment>


    )



}