import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        
        <footer className="navbar-pink mt-auto py-4">
            <Container>
                <Row className="align-items-center">
                    
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <Nav>
                            <Nav.Link as={Link} to="/about" className="text-secondary">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="text-secondary">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/privacy" className="text-secondary">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/terms" className="text-secondary">Terms of Service</Nav.Link>
                        </Nav>
                    </Col>

                   
                   
                    <Col md={6} className="text-center text-md-end">
                        <a href="https://facebook.com" className="text-secondary me-3 fs-4"><FaFacebook /></a>
                        <a href="https://twitter.com" className="text-secondary me-3 fs-4"><FaTwitter /></a>
                        <a href="https://instagram.com" className="text-secondary me-3 fs-4"><FaInstagram /></a>
                        <a href="https://linkedin.com" className="text-secondary fs-4"><FaLinkedin /></a>
                    </Col>
                </Row>
                <hr className="my-3" />
                <Row>
                    <Col className="text-center text-muted">
                        &copy; {new Date().getFullYear()} Book Haven, Inc. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;