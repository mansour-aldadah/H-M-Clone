import React from 'react';
import './Productdet.css';
import { Button, Accordion, Card, Container, Row, Col } from 'react-bootstrap';

function Productdet() {
   
      return (
        <Container className="my-4">
          <Row>
              {/* Left Column: Product Image */}
              <Col md={6}>
              <Card.Img 
                className="product-image"
                src="https://dummyjson.com/image/i/products/1/thumbnail.jpg" 
                alt="Product"
              />
            </Col>
    
            {/* Right Column: Product Details */}
            <Col md={6}>
              <Card className="p-4 product-details-card">
                <h2>Jumper</h2>
                <p className="price">EGP 799.00</p>
                <p className="text-muted">Inclusive of VAT</p>
    
                {/* Same day delivery info */}
                <div className="delivery-btn btn btn-outline-success">
                  <i ></i> Same Day Delivery Available
                </div>
    
                {/* Write a review */}
                <p className="mt-3">
                  <a href="/" >Write a review</a>
                </p>
    
                {/* Buttons for Add to Basket and Add to Favourites */}
                <div className="action-buttons my-3">
                  <Button variant="dark" className="add-to-basket-btn mb-2">
                    <i className="bi bi-bag"></i> ADD TO BASKET
                  </Button>
                  <Button variant="light" className="add-to-favourites-btn mb-2">
                    <i className="bi bi-heart"></i> ADD TO FAVOURITES
                  </Button>
                </div>
    
                {/* Free returns info */}
                <p className="text-muted free-returns">Free online returns within 14 days</p>
    
                {/* Accordion for Delivery and Collection */}
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Delivery Options</Accordion.Header>
                    <Accordion.Body>
                      Explore the delivery options applicable to your area.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Click and Collect</Accordion.Header>
                    <Accordion.Body>
                      Available to collect in 2-5 days.
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
