import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Product.css';

const Product = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
            description: "Some description about Product 1. It has features A, B, and C.",
            price: "$29.99"
        },
        {
            id: 2,
            title: "Product 2",
            image: "https://cdn.pixabay.com/photo/2020/06/16/10/30/camera-5305154_640.jpg",
            description: "Some description about Product 2. It has features X, Y, and Z.",
            price: "$39.99"
        },
        {
            id: 3,
            title: "Product 3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5MDUj1GL9yQYtW7PQ6wDZPfAyiXODlT8-GigtRumAWWO7AsHqwa8-Lf5aP2Zb2H1UNM&usqp=CAU",
            description: "Some description about Product 3. It includes features M, N, and O.",
            price: "$49.99"
        }
    ];

    return (
        <Container id="products" className="text-center my-4">
            <h1 className="product-header">Products</h1>
            <Row className="justify-content-center">
                {products.map(product => (
                    <Col md={4} className="mb-4" key={product.id}>
                        <Card className="card-hover">
                            <Card.Img variant="top" src={product.image} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    {product.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Product;
