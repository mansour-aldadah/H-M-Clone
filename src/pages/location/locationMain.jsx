import React from "react";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import "./locationMain.css"; // Import custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";
import {
  faNavicon,
  faMap,
  faSearch,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

const StoreSearch = () => {
  const [lang, setLang] = useContext(langContext);
  return (
    <section className="locationMain">
      <Container fluid>
        <Row>
          <Col>
            <h4>
              <strong>
                {lang == "ar"
                  ? StringManager.locationTitle.ar
                  : StringManager.locationTitle.en}
              </strong>
            </h4>
            <br />
            <h4>
              <strong>
                {" "}
                {lang == "ar"
                  ? StringManager.findStores.ar
                  : StringManager.findStores.en}{" "}
              </strong>
            </h4>
            <hr />
          </Col>
        </Row>

        <Row className="search-bar">
          <Col xs={1} md={1} className="red">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="me-2 red" />
            <a href="/your-target-url" style={{ border: "none" }}>
              {lang == "ar" ? StringManager.nearMe.ar : StringManager.nearMe.en}
            </a>
          </Col>
          <Col xs={2} md={2}>
            <p>
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              <strong>
                {lang == "ar"
                  ? StringManager.findNear.ar
                  : StringManager.findNear.en}
              </strong>
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
              {lang == "ar"
                ? StringManager.mapView.ar
                : StringManager.mapView.en}
            </a>
          </Col>
          <Col xs={2} md={2} className="hover-col">
            <a href="/your-target-url" style={{ border: "none" }}>
              <FontAwesomeIcon icon={faMap} className="me-2" />
              {lang == "ar"
                ? StringManager.listView.ar
                : StringManager.listView.en}
            </a>
          </Col>
        </Row>
        <hr />
        <p>
          <strong>
            {lang == "ar"
              ? StringManager.selectStore.ar
              : StringManager.selectStore.en}
          </strong>
        </p>
        <Row>
          <Col xs={12} md={5} className="sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item className="letter-item">
                <span className="letter-list">ك</span>
                <a href="">كايرو فيستفال سيتي</a>
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
