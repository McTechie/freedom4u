import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.png';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" bg="info" variant="dark">
            <LinkContainer to="/home">
                <Navbar.Brand>
                    <img src={logo} className="nav-logo" alt="Freedom4You" /> Freedom For You Foundation
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <LinkContainer to="/home">
                        <Nav.Link className="mx-3">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="mx-3">About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link className="mx-3">Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/gallery">
                        <Nav.Link className="mx-3">Gallery</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/donate">
                        <Nav.Link className="mx-3">Contribute</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link className="mx-3">Contact Us</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;