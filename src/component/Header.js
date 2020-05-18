import React from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="./logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React POC
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;