import React from "react";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import "./locationMain.css"; // Import custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNavicon,
  faMap,
  faSearch,
  faLocationCrosshairs
} from "@fortawesome/free-solid-svg-icons";
const StoreSearch = () => {
  return (
    <section className="locationMain">
      <Container fluid>
        <Row>
          <Col>
            <h4>
              <strong>محلاتنا</strong>
            </h4>
            <br />
            <h4>
              <strong>البحث عن المحلات</strong>
            </h4>
            <hr />
          </Col>
        </Row>

        <Row className="search-bar">
          <Col xs={1} md={1} className="red">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="me-2 red" />
            <a href="/your-target-url" style={{ border: "none" }}>
              المحلات القريبة مني
            </a>
          </Col>
          <Col xs={2} md={2}>
            <p>
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              <strong>البحث عن أقرب المحلات إليك</strong>
            </p>
          </Col>
          <Col xs={4} md={4}>
            <Form.Control type="text" placeholder="ابحث عن أقرب المحلات إليك">
              {/* <FontAwesomeIcon icon={faSearch} className="me-2" /> */}
            </Form.Control>
            {/* <Button variant="outline-primary" className="p-0 me-2 "> */}
            <FontAwesomeIcon icon={faSearch} className="me-2" />
            {/* </Button> */}
          </Col>

          <Col xs={2} md={2} className="hover-col">
            <a href="/your-target-url" style={{ border: "none" }}>
              <FontAwesomeIcon icon={faNavicon} className="me-2" />
              عرض الخريطه
            </a>
          </Col>
          <Col xs={2} md={2} className="hover-col">
            <a href="/your-target-url" style={{ border: "none" }}>
              <FontAwesomeIcon icon={faMap} className="me-2" />
              عرض القائمة
            </a>
          </Col>
        </Row>
        <hr />
        <p>
          <strong>اختر محل للاطلاع على</strong>
        </p>
        <Row>
          <Col xs={12} md={5} className="sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item className="letter-item">
                <span className="letter-list">ك</span>
                <a href="">كايرو فيستيفال سيتي</a>
              </ListGroup.Item>
              <ListGroup.Item className="letter-item">
                <span className="letter-list">م</span>
                <a href="">مول مصر، القاهرة</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={5} className="sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item className="letter-item">
                <span className="letter-list">ا</span>
                <a href="">اتش آند ام اوبن اير مدينتي</a>
              </ListGroup.Item>
              <ListGroup.Item className="letter-item">
                <span className="letter-list">ب</span>
                <a href="">بوينت 90، القاهرة</a>
              </ListGroup.Item>
              <ListGroup.Item className="letter-item">
                <span className="letter-list">س</span>
                <a href="">سيتي ستارز، القاهرة</a>
                <br />
                <a href="">سيتي سنتر ألماظة</a>
                <br />
                <a href="">سيتي سنتر، الإسكندرية</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StoreSearch;
