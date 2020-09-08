import React, { useContext } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../context/auth-context';

const NavLink = styled(Link)`
    text-decoration: none !important;
    color: lightgray;
`;

const NavBar = () => {
    const auth = useContext(AuthContext);

    const logout =() => {
        auth.logout();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Blog Posts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav className="mr-auto">
                        <Nav.Link href="">
                            <NavLink to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link href="">
                            <NavLink to="/post/add">
                                Add Post
                    </NavLink>
                        </Nav.Link>
                    </Nav>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Button className="ml-2" onClick={logout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;