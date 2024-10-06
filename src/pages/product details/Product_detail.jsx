// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './ProductPage.css';

const Product_detail = () => {
  const [products, setProducts] = useState([]);
  const desiredProductId = 1; // Replace with the desired product ID

  // Fetch products from API
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-4">
      <Row className="col-lg-10 col-md-12 m-auto">
        {/* Map through products array */}
        {products.length > 0 && products.filter((product) => product.id === desiredProductId).map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className="p-0 m-0 border-0">
              <a href="">
                <Card.Img
                  style={{ maxHeight: "100%" }}
                  variant="top"
                  src={product.thumbnail} // Dynamic product image
                  alt={product.title}
                />
              </a>

              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="fs-6">{product.title}</Card.Title>
                <Card.Text>
                  <p>EGP {product.price}</p>
                </Card.Text>
                <Button variant="dark" className="my-2">Add to Basket</Button>
                <Button variant="light" className="my-2">Add to Favourites</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product_detail;