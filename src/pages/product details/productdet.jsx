import React from "react";
import "./Productdet.css";
import { Button, Accordion, Card, Container, Row, Col } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

function Productdet() {
  const product = useLoaderData(); // Fetch data from the loader
  const [lang, setLang] = useContext(langContext);

  if (!product) {
    return <p>Error loading product. Please try again later.</p>; // Fallback in case product is null
  }

  return (
    <Container className="my-4">
      <Row>
        {/* Left Column: Product Image */}
        <Col md={6}>
          <Card.Img
            className="product-image"
            src={product.thumbnail} // Ensure this field exists in the product data
            alt={product.title} // Ensure this field exists in the product data
          />
        </Col>

        {/* Right Column: Product Details */}
        <Col md={6}>
          <Card className="p-4 product-details-card">
            <h2>{product.title}</h2> {/* Ensure this field exists */}
            <p className="price">
              {lang == "ar"
                ? StringManager.currency.ar
                : StringManager.currency.en}{" "}
              {product.price}
            </p>{" "}
            {/* Ensure this field exists */}
            <p className="text-muted">
              {" "}
              {lang == "ar" ? StringManager.vAT.ar : StringManager.vAT.en}
            </p>
            {/* Same day delivery info */}
            <div className="delivery-btn btn btn-outline-success">
              <i></i>
              {lang == "ar"
                ? StringManager.sameDay.ar
                : StringManager.sameDay.en}
            </div>
            {/* Write a review */}
            <p className="mt-3">
              <a href="/">
                {lang == "ar"
                  ? StringManager.writeRev.ar
                  : StringManager.writeRev.en}
              </a>
            </p>
            {/* Buttons for Add to Basket and Add to Favourites */}
            <div className="action-buttons my-3">
              <Button variant="dark" className="add-to-basket-btn mb-2">
                <i className="bi bi-bag"></i>{" "}
                {lang == "ar"
                  ? StringManager.addToBs.ar
                  : StringManager.addToBs.en}
              </Button>
              <Button variant="light" className="add-to-favourites-btn mb-2">
                <i className="bi bi-heart"></i>{" "}
                {lang == "ar"
                  ? StringManager.addToFv.ar
                  : StringManager.addToFv.en}
              </Button>
            </div>
            {/* Free returns info */}
            <p className="text-muted free-returns">
              {lang == "ar"
                ? StringManager.returnSer.ar
                : StringManager.returnSer.en}
            </p>
            {/* Accordion for Delivery and Collection */}
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  {lang == "ar"
                    ? StringManager.deliveryOptions.ar
                    : StringManager.deliveryOptions.en}
                </Accordion.Header>
                <Accordion.Body>
                  {lang == "ar"
                    ? StringManager.explore.ar
                    : StringManager.explore.en}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  {lang == "ar"
                    ? StringManager.clickCollect.ar
                    : StringManager.clickCollect.en}
                </Accordion.Header>
                <Accordion.Body>
                  {lang == "ar"
                    ? StringManager.clickC.ar
                    : StringManager.clickC.en}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Productdet;

import axios from "axios";

export const ProductLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data; // Ensure you're returning the correct data structure
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return null; // Return null if there's an error
  }
};
