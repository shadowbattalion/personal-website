import React from 'react'
// import {HashLink as Link} from "react-router-hash-link"
// import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

export default function NavigationBar(){


    return(

        <React.Fragment>


            <Navbar collapseOnSelect fixed="top" bg="black" variant="dark" expand="lg">
            <Container className='m-0'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link href="#home"><span className="link-text">Home</span></Nav.Link>
                        <Nav.Link href="#work-experiences"><span className="link-text">Experiences</span></Nav.Link>
                        <Nav.Link href="#education"><span className="link-text">Education</span></Nav.Link>
                        <Nav.Link href="#projects"><span className="link-text">Projects</span></Nav.Link>
                        <Nav.Link href="#contacts"><span className="link-text">Contact</span></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            

        </React.Fragment>


    )



}