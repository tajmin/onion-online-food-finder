import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container className="py-2">
                    <Navbar.Brand href="#home">
                        <img src={logo} width="200" height="53" className="d-inline-block align-top" alt="Hot Onion Diner" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#deets" className="px-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </Nav.Link>
                            <Nav.Link href="#deets" className="px-4">Login</Nav.Link>
                            <Button variant="danger" className="rounded-pill px-4">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;