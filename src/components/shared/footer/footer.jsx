import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import footerImage from "../../../assets/footerImages/h-m-logo-bw.svg";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import langContext from "../../../services/context/langContext";
import StringManager from "../../../resources/stringManager";

function Footer() {
  const navigate = useNavigate();
  const [lang, setLang] = useContext(langContext);
  const [activeKey, setActiveKey] = useState(null);

  // Toggle the active state
  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <footer className="px-2 py-4">
        <div className="text-center d-flex d-md-none justify-content-center lang mb-3">
          <span className="px-2 active">العربية</span>
          <span className="px-2 non-active">ENGLISH</span>
        </div>
        <Row className="m-0">
          <Col md="4" lg="6" className="d-none d-md-block ">
            <Row className="pe-sm-4 pe-md-5 m-auto d-flex">
              <Col xs="12" lg="7" className="about  mb-3 mb-lg-0">
                <div className="d-inline-block links">
                  <h6>
                    {lang == "ar"
                      ? StringManager.footerTitle.ar
                      : StringManager.footerTitle.en}
                  </h6>
                  <a
                    onClick={() => navigate("/AboutUs")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.aboutUs.ar
                      : StringManager.aboutUs.en}
                  </a>
                  <a
                    onClick={() => navigate("/DeliveryInformation")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.delivery.ar
                      : StringManager.delivery.en}
                  </a>
                  <a
                    onClick={() => navigate("/PurchaseTerms")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.termsSale.ar
                      : StringManager.termsSale.en}
                  </a>
                  <a
                    onClick={() => navigate("/Terms")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.webTerms.ar
                      : StringManager.webTerms.en}
                  </a>
                  <a
                    onClick={() => navigate("/PrivacyPolicy")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.privacyPolicy.ar
                      : StringManager.privacyPolicy.en}
                  </a>
                  <a
                    onClick={() => navigate("/ReturnExchange")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.returns.ar
                      : StringManager.returns.en}
                  </a>
                  <a
                    onClick={() => navigate("/Sustainability")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.sustain.ar
                      : StringManager.sustain.en}
                  </a>
                </div>
              </Col>
              <Col xs="12" lg="5" className="services d-inline-block">
                <div className="links">
                  <h6>
                    {lang == "ar"
                      ? StringManager.customerService.ar
                      : StringManager.customerService.en}{" "}
                  </h6>
                  <a
                    onClick={() => navigate("/Questions")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar" ? StringManager.faq.ar : StringManager.faq.en}
                  </a>
                  <a
                    onClick={() => navigate("/ContactUs")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.contactUs.ar
                      : StringManager.contactUs.en}
                  </a>
                  <a
                    // onClick={() => navigate("/")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.whatsApp.ar
                      : StringManager.whatsApp.en}
                  </a>
                  <a
                    onClick={() => navigate("/WebsiteMap")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.siteMap.ar
                      : StringManager.siteMap.en}
                  </a>
                  <a
                    onClick={() => navigate("/location")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.stores.ar
                      : StringManager.stores.en}
                  </a>
                  <a
                    onClick={() => navigate("/Lighting")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.furniture.ar
                      : StringManager.furniture.en}
                  </a>
                  <a
                    onClick={() => navigate("/WeeklyGiftCardsPage")}
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    {lang == "ar"
                      ? StringManager.eGift.ar
                      : StringManager.eGift.en}
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="d-md-none p-0">
            <Accordion activeKey={activeKey}>
              {/* First Accordion Item */}
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  className="w-100"
                  onClick={() => handleToggle("0")}
                >
                  <span>
                    {" "}
                    {lang == "ar"
                      ? StringManager.footerTitle.ar
                      : StringManager.footerTitle.en}
                  </span>
                  <span className="icon">
                    {activeKey === "0" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="d-inline-block links text-lg-end">
                    <a
                      onClick={() => navigate("/AboutUs")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.aboutUs.ar
                        : StringManager.aboutUs.en}
                    </a>
                    <a
                      onClick={() => navigate("/DeliveryInformation")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.delivery.ar
                        : StringManager.delivery.en}
                    </a>
                    <a
                      onClick={() => navigate("/PurchaseTerms")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.termsSale.ar
                        : StringManager.termsSale.en}
                    </a>
                    <a
                      onClick={() => navigate("/Terms")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.webTerms.ar
                        : StringManager.webTerms.en}
                    </a>
                    <a
                      onClick={() => navigate("/PrivacyPolicy")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.privacyPolicy.ar
                        : StringManager.privacyPolicy.en}
                    </a>
                    <a
                      onClick={() => navigate("/ReturnExchange")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.returns.ar
                        : StringManager.returns.en}
                    </a>
                    <a
                      onClick={() => navigate("/Sustainability")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.sustain.ar
                        : StringManager.sustain.en}
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Second Accordion Item */}
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleToggle("1")}>
                  <span>
                    {" "}
                    {lang == "ar"
                      ? StringManager.customerService.ar
                      : StringManager.customerService.en}{" "}
                  </span>
                  <span className="icon">
                    {activeKey === "1" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="links d-inline-block text-lg-end">
                    <a
                      onClick={() => navigate("/Questions")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.faq.ar
                        : StringManager.faq.en}
                    </a>
                    <a
                      onClick={() => navigate("/ContactUs")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.contactUs.ar
                        : StringManager.contactUs.en}
                    </a>
                    <a
                      onClick={() => navigate("/")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.whatsApp.ar
                        : StringManager.whatsApp.en}
                    </a>
                    <a
                      // onClick={() => navigate("/")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.siteMap.ar
                        : StringManager.siteMap.en}
                    </a>
                    <a
                      onClick={() => navigate("/location")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.stores.ar
                        : StringManager.stores.en}
                    </a>
                    <a
                      onClick={() => navigate("/Lighting")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.furniture.ar
                        : StringManager.furniture.en}
                    </a>
                    <a
                      onClick={() => navigate("/WeeklyGiftCardsPage")}
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      {lang == "ar"
                        ? StringManager.eGift.ar
                        : StringManager.eGift.en}
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            md="5"
            lg="6"
            className="px-md-0 px-lg-5 text-md-start mt-5 mt-md-0"
          >
            <div className="contact-us d-inline-block text-end px-2 px-md-0">
              <h6>
                {lang == "ar" ? StringManager.news.ar : StringManager.news.en}{" "}
              </h6>
              <div className="text">
                {lang == "ar"
                  ? StringManager.newsSub.ar
                  : StringManager.newsSub.en}
              </div>

              <form className="mt-3 border-dark border-bottom border-1 d-inline-block w-100 d-flex justify-content-between">
                <input
                  type="text"
                  className="input border-0 py-2 w-100"
                  placeholder={
                    lang == "ar"
                      ? StringManager.emailNews.ar
                      : StringManager.emailNews.en
                  }
                />
                <button
                  id="basic-addon1"
                  className="btn rounded-0 d-inline-block p-0 fw-bolder"
                >
                  {lang == "ar"
                    ? StringManager.signUpnews.ar
                    : StringManager.signUpnews.en}
                </button>
              </form>

              <div className="d-flex d-none d-md-block d-lg-none justify-content-center lang mt-4">
                <span className="active px-2">العربية</span>
                <span className="px-2 non-active">ENGLISH</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="center text-center">
          <div className="head">
            <p className="head p-1 m-0">
              {" "}
              {lang == "ar"
                ? StringManager.tailtitle.ar
                : StringManager.tailtitle.en}{" "}
            </p>
            <p className="p-1 m-0">
              {lang == "ar"
                ? StringManager.tailFor.ar
                : StringManager.tailFor.en}
            </p>
            <p className="p-1 m-0">
              {lang == "ar"
                ? StringManager.tailCont.ar
                : StringManager.tailCont.en}
            </p>
            <img
              src={footerImage}
              className="mt-2"
              style={{ width: "200px" }}
              alt="Footer Logo"
            />
          </div>
          <div className="icons mt-4 fs-5">
            <a
              href="https://www.facebook.com/hm/?brand_redir=2024714534446110"
              className="fs-5 mx-2"
            >
              <IoLogoFacebook className="mx-2" />
            </a>
            <a href="https://www.instagram.com/hm/" className="fs-5 mx-2">
              <IoLogoInstagram className="mx-2" />
            </a>
            <a href="https://x.com/hmegypt" className="fs-5 mx-2">
              <FaXTwitter className="mx-2" />
            </a>
          </div>
          <Row className="justify-content-center m-0">
            <Col md="8" lg="5" className="mt-4 last">
              <p>
                {lang == "ar"
                  ? StringManager.endCont.ar
                  : StringManager.endCont.en}
              </p>
              <p>
                <a
                  href="https://www.hm.com/entrance.ahtml?orguri=%2F"
                  target="blank"
                  className="text-decoration-none "
                >
                  {lang == "ar"
                    ? StringManager.egypt.ar
                    : StringManager.egypt.en}
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}

export default Footer;
