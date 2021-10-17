import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import useMeals from '../../../hooks/useMeals';

const Header = () => {
    const { user, logOut } = useAuth();
    const [meals] = useMeals()
    const [cart] = useCart(meals);

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
                            <Nav.Link as={Link} to="/cart" className="px-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  </Nav.Link>
                            {
                                user.email ? <div><Button onClick={logOut} variant="danger" className="rounded-pill px-4">Log Out</Button></div> : <div>
                                    <Nav.Link as={Link} to="/login" className="px-4">Login</Nav.Link>
                                    <Link to="/signup"><Button variant="danger" className="rounded-pill px-4">Sign Up</Button></Link>
                                </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;