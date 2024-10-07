import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

const Product_detail = () => {
  const product = useLoaderData(); // Fetch data from the loader
  const { id } = useParams(); // Extract the product ID from the URL

  return (
    <Container className="my-4">
      <Row className="col-lg-10 col-md-12 m-auto">
        <Col key={id} sm={12} md={6} lg={4} xl={3} className="mb-4">
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
              <Button variant="dark" className="my-2">
                Add to Basket
              </Button>
              <Button variant="light" className="my-2">
                Add to Favourites
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product_detail;

export const ProductLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products for product:", error.message);
    return null;
  }
};
