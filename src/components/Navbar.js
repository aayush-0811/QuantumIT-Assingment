import React from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="light" expand="lg" className="compact-navbar">
                <Container fluid="md">
                    <Navbar.Brand href="#home" className="text-blue">Jillion Technologies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="home" smooth={true} duration={500} className="nav-link text-blue">Home</Link>
                            <Link to="features" smooth={true} duration={500} className="nav-link text-blue">Features</Link>
                            <Link to="products" smooth={true} duration={500} className="nav-link text-blue">Products</Link>
                            <Link to="testimonials" smooth={true} duration={500} className="nav-link text-blue">Testimonials</Link>
                            <Link to="contact" smooth={true} duration={500} className="nav-link text-blue">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
