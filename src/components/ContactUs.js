import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsComponent.css';

const ContactUsComponent = () => {
    return (
        <Container id="contact" className="contact-container my-4">
            <h1 className="text-center mb-4">Contact Us</h1>
            <Row className="align-items-center">
                <Col md={6} className="d-none d-md-block">
                    <div className="contact-image">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp" alt="Contact Us" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="contact-form">
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formReview">
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Your message" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUsComponent;
