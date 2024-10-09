import { Col, Container, Row } from "react-bootstrap";
import "./WeeklyGiftCardsPage.css";
import cards from "../../assets/WeeklyGiftCardsPageImages/Group 7 2_0.webp";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

export default function WeeklyGiftCardsPage() {
  const [activeKey, setActiveKey] = useState(null);
  const [lang, setLang] = useContext(langContext);

  // Toggle the active state
  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <section className="weekly-gift-cards p-0">
      <Container className="p-0 p-lg-5 text-center text-md-end">
        <Row className="first d-none d-md-flex mx-auto p-5 w-100 m-5">
          <Col md="6">
            <img src={cards} alt="cards" style={{ width: "100%" }} />
          </Col>
          <Col md="6">
            <h3 className="fw-bold">
              {lang == "ar"
                ? StringManager.eGiftcardTitle.ar
                : StringManager.eGiftcardTitle.en}
            </h3>
            <p className="fw-bold">
              {lang == "ar"
                ? StringManager.eGiftcardDesc.ar
                : StringManager.eGiftcardDesc.en}
            </p>
            <Row>
              <Col md="6">
                <button className="btn btn-dark buy w-100 rounded-0 fw-bold p-3">
                  {lang == "ar"
                    ? StringManager.buyButton.ar
                    : StringManager.buyButton.en}
                </button>
              </Col>
              <Col md="6">
                <button className="btn btn-outline-dark buy w-100 rounded-0 fw-bold p-3">
                  {lang == "ar"
                    ? StringManager.linkButton.ar
                    : StringManager.linkButton.en}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="first d-block d-md-none m-0 p-4 w-100">
          <Col md="6" className="p-0">
            <h2>
              {lang == "ar"
                ? StringManager.eGiftcardTitle.ar
                : StringManager.eGiftcardTitle.en}
            </h2>
            <p>
              {lang == "ar"
                ? StringManager.eGiftcardDesc.ar
                : StringManager.eGiftcardDesc.en}
            </p>
            <img src={cards} alt="cards" style={{ width: "100%" }} />

            <button className="btn btn-dark buy w-100 rounded-0 fw-bold p-3 my-2">
              {lang == "ar"
                ? StringManager.buyButton.ar
                : StringManager.buyButton.en}
            </button>

            <button className="btn btn-outline-dark buy w-100 rounded-0 fw-bold p-3 my-2">
              {lang == "ar"
                ? StringManager.linkButton.ar
                : StringManager.linkButton.en}
            </button>
          </Col>
        </Row>
        <Row className="p-0 m-0 mb-3">
          <Col md="6" className="text-center px-4 px-sm-0">
            <Card className="border-0 my-3 my-md-0 rounded-0 ms-md-3">
              <Card.Body>
                <Card.Title>
                  {lang == "ar"
                    ? StringManager.checkBalance.ar
                    : StringManager.checkBalance.en}{" "}
                </Card.Title>
                <Card.Text className="mb-5">
                  {lang == "ar"
                    ? StringManager.checkBalanceDesc.ar
                    : StringManager.checkBalanceDesc.en}
                </Card.Text>
                <button className="btn btn-outline-dark buy buy2 rounded-0 fw-bold p-3 px-5 my-2">
                  {lang == "ar"
                    ? StringManager.checkBalanceLink.ar
                    : StringManager.checkBalanceLink.en}
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" className="text-center px-4 px-sm-0">
            <Card className="border-0 my-3 my-md-0 rounded-0 me-md-3">
              <Card.Body>
                <Card.Title>
                  {lang == "ar"
                    ? StringManager.reloadEgift.ar
                    : StringManager.reloadEgift.en}
                </Card.Title>
                <Card.Text className="mb-5">
                  {lang == "ar"
                    ? StringManager.reloadEgiftDesc.ar
                    : StringManager.reloadEgiftDesc.en}
                </Card.Text>
                <button className="btn btn-outline-dark buy buy2 rounded-0 fw-bold p-3 px-5 my-2">
                  {lang == "ar"
                    ? StringManager.reloadEgiftLink.ar
                    : StringManager.reloadEgiftLink.en}
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="desc mb-5 px-4">
          <h5 className="my-4">
            {lang == "ar"
              ? StringManager.bestGiftsTitle.ar
              : StringManager.bestGiftsTitle.en}
          </h5>
          <p className="my-4">
            {lang == "ar"
              ? StringManager.bestGiftsPas1.ar
              : StringManager.bestGiftsPas1.en}
          </p>
          <p className="my-4">
            {lang == "ar"
              ? StringManager.bestGiftsPas2.ar
              : StringManager.bestGiftsPas2.en}
          </p>
          <p className="my-4">
            {lang == "ar"
              ? StringManager.bestGiftsPas3.ar
              : StringManager.bestGiftsPas3.en}
          </p>
          <p className="my-4">
            {lang == "ar"
              ? StringManager.bestGiftsPas4.ar
              : StringManager.bestGiftsPas4.en}
          </p>
          <h5 className="my-4">
            {lang == "ar"
              ? StringManager.conclusine.ar
              : StringManager.conclusine.en}
          </h5>
        </div>
        <hr className="my-5 px-4" />

        <div className="accordion px-4 px-md-0">
          <h3 className="text-center mb-4 py-3">
            {lang == "ar"
              ? StringManager.eGiftTerms.ar
              : StringManager.eGiftTerms.en}
          </h3>
          <Accordion
            activeKey={activeKey}
            className="rounded-0 border-0 text-end"
          >
            <Accordion.Item eventKey="0" className="rounded-0 border-0 mb-3">
              <Accordion.Header
                className="w-100"
                onClick={() => handleToggle("0")}
              >
                <span>
                  {lang == "ar"
                    ? StringManager.general.ar
                    : StringManager.general.en}
                </span>
                <span className="icon">
                  {activeKey === "0" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.generalCont.ar
                    : StringManager.generalCont.en}
                </p>

                <p className="p-0 m-0">
                  {" "}
                  <a href="#" className="fw-bold">
                    {" "}
                    خدمة الزبائن.
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("1")}>
                <span>
                  {lang == "ar"
                    ? StringManager.paymentAndDelivery.ar
                    : StringManager.paymentAndDelivery.en}{" "}
                </span>
                <span className="icon">
                  {activeKey === "1" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.paymentAndDeliveryCont.ar
                    : StringManager.paymentAndDeliveryCont.en}
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("2")}>
                <span>
                  {lang == "ar"
                    ? StringManager.validity.ar
                    : StringManager.validity.en}
                </span>
                <span className="icon">
                  {activeKey === "2" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.validityCont.ar
                    : StringManager.validityCont.en}
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("3")}>
                <span>
                  {lang == "ar"
                    ? StringManager.limitedLiability.ar
                    : StringManager.limitedLiability.en}{" "}
                </span>
                <span className="icon">
                  {activeKey === "3" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.limitedLiabilityCont.ar
                    : StringManager.limitedLiabilityCont.en}
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("4")}>
                <span>
                  {lang == "ar"
                    ? StringManager.privacyPolicy.ar
                    : StringManager.privacyPolicy.en}{" "}
                </span>
                <span className="icon">
                  {activeKey === "4" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.privacyPolicyCont.ar
                    : StringManager.privacyPolicyCont.en}
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("5")}>
                <span>
                  {lang == "ar"
                    ? StringManager.customerService.ar
                    : StringManager.customerService.en}
                </span>
                <span className="icon">
                  {activeKey === "5" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  {lang == "ar"
                    ? StringManager.customerServiceCont.ar
                    : StringManager.customerServiceCont.en}
                  <a href="#" className="fw-bold">
                    {lang == "ar"
                      ? StringManager.here.ar
                      : StringManager.here.en}
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="list">
          <ul className="p-4 pb-0 fw-500">
            <li className="py-2">
              {lang == "ar" ? StringManager.li1.ar : StringManager.li1.en}
            </li>
            <li className="py-2">
              {lang == "ar" ? StringManager.li2.ar : StringManager.li2.en}
            </li>
            <li className="py-2">
              {lang == "ar" ? StringManager.li3.ar : StringManager.li3.en}
            </li>
          </ul>
        </div>
        <div className="link fw-500">
          <p className="p-0">
            {lang == "ar"
              ? StringManager.knowPrivacyPolicy.ar
              : StringManager.knowPrivacyPolicy.en}
            <a href="#" className="fw-bold text-decoration-none">
              {lang == "ar" ? StringManager.here.ar : StringManager.here.en}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
