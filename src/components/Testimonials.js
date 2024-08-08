import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialComponent.css';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO at Company",
        designation: "Chief Executive Officer",
        image: "https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg",
        testimonial: "This product has been a game-changer for our company. Highly recommend it to everyone!"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "CTO at Company",
        designation: "Chief Technology Officer",
        image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewpersonaltraining-697509.jpg&fm=jpg",
        testimonial: "The level of service and quality provided is outstanding. Our team is extremely satisfied."
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "Marketing Manager",
        designation: "Marketing Specialist",
        image: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
        testimonial: "An excellent product with a user-friendly interface. It has simplified our workflow immensely."
    }
];

const TestimonialComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container id="testimonials" className="testimonial-container text-center my-4">
            <h1 className="testimonial-header mb-20">Testimonials</h1>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon"></span>}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon"></span>}
                controls={true}
                indicators={true}
            >
                {testimonials.map((testi) => (
                    <Carousel.Item key={testi.id}>
                        <Row className="justify-content-center">
                            <Col md={6} className="text-center">
                                <div className="testimonial-profile">
                                    <img src={testi.image} alt={testi.name} className="testimonial-img" />
                                    <p className="testimonial-designation">{testi.designation}</p>
                                    <h5 className="testimonial-name">{testi.name}</h5>
                                    <p className="testimonial-position">{testi.position}</p>
                                </div>
                                <p className="testimonial-text">{testi.testimonial}</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default TestimonialComponent;
