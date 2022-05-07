import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top w-full'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/home"><h1>BIKE WAY</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'><h6>Home</h6></Nav.Link>
                            <Nav.Link href="home#item"><h6>Items</h6></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/blogs'><h6>Blogs</h6></Nav.Link>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to='/manageInventory'><h6>Manage Inventory</h6></Nav.Link>
                                    <Nav.Link as={Link} to='/addItem'><h6>Add Item</h6></Nav.Link>
                                    <Nav.Link as={Link} to='/myItem'><h6>My Item</h6></Nav.Link>
                                </>
                            }
                            {

                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}><h6>sign out</h6></button>
                                    :
                                    <Nav.Link as={Link} to='/login'><h6>Login</h6></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;