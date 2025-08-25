import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { clearSelectedBook } from '../features/booksSlice';

const AppNavbar = () => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector(state => state.cart.items.length);
    const wishlistItemCount = useSelector(state => state.wishlist.items.length);

    return (
        <Navbar expand="lg" className="navbar-pink" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => dispatch(clearSelectedBook())}>
                    📚 Book Haven
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/books">Books</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        <Nav.Link as={Link} to="/wishlist" className="nav-icon">
                            <FaHeart size={24} />
                            {wishlistItemCount > 0 && <Badge pill bg="danger" style={{ position: 'absolute', top: 0, right: -5 }}>{wishlistItemCount}</Badge>}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="nav-icon">
                            <FaShoppingCart size={24} />
                            {cartItemCount > 0 && <Badge pill bg="danger" style={{ position: 'absolute', top: 0, right: -5 }}>{cartItemCount}</Badge>}
                        </Nav.Link>
                        <Button as={Link} to="/login" variant="secondary" className="btn-gray ms-2">Login</Button>
                        <Button as={Link} to="/signup" variant="secondary" className="btn-gray ms-2">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;