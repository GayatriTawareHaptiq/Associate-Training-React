import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Signup = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card className="shadow-lg" style={{ width: '400px' }}>
                <Card.Body className="p-5">
                    <h2 className="text-center mb-4">Create Account</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className="w-100 btn-gray" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Signup;