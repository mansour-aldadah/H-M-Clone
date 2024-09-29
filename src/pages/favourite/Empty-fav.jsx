import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Empty-fav.css'; // Import your custom CSS file

function Favorites() {
  return (
    <Container className="favorites-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>المنتجات المفضلة</h2>
          <hr />
          <p className="favorites-message">المنتجات المفضلة الخاصة بك فارغة.</p>
          <Button variant="primary" className="btn-shop">
            اذهب للتسوق
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Favorites;