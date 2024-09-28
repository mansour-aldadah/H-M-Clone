import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import footerImage from "../../../assets/footerImages/h-m-logo-bw.svg";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
export default function Footer() {
  const [activeKey, setActiveKey] = useState(null);

  // Toggle the active state
  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <>
      <footer dir="rtl" className="px-2 py-4">
        <div className="text-center d-flex d-md-none justify-content-center lang mb-3">
          <span className="px-2 active">العربية</span>
          <span className="px-2 non-active">ENGLISH</span>
        </div>
        <Row className="m-0">
          <Col md="4" lg="6" className="d-none d-md-block">
            <Row className="pe-sm-4 pe-md-5">
              <Col xs="12" lg="7" className="about text-lg-center mb-3 mb-lg-0">
                <div className="d-inline-block links text-lg-end">
                  <h6>حول اتش آند ام</h6>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    معلومات عنا
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    معلومات التوصيل
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    معلومات التوصيل
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    شروط وأحكام الموقع
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    سياسة الخصوصية
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    الإرجاع والاستبدال
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    الاستدامة
                  </a>
                </div>
              </Col>
              <Col xs="12" lg="5" className="services d-inline-block">
                <div className="links">
                  <h6>خدمة الزبائن</h6>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    الأسئلة المتكررة
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    اتصل بنا
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    التواصل عبر واتساب
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    خريطة الموقع
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    محلاتنا
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    أثاث وإضاءة اتش آند ام هوم
                  </a>
                  <a
                    className="d-block text-decoration-none w-100 my-3 my-sm-1 my-lg-3"
                    href="#"
                  >
                    بطاقة الهدايا الإلكترونية
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
                  <span> حول اتش آند ام</span>
                  <span className="icon">
                    {activeKey === "0" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="d-inline-block links text-lg-end">
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      معلومات عنا
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      معلومات التوصيل
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      معلومات التوصيل
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      شروط وأحكام الموقع
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      سياسة الخصوصية
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      الإرجاع والاستبدال
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      الاستدامة
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Second Accordion Item */}
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleToggle("1")}>
                  <span> خدمة الزبائن</span>
                  <span className="icon">
                    {activeKey === "1" ? <FaMinus /> : <FaPlus />}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  <div className="links d-inline-block text-lg-end">
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      الأسئلة المتكررة
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      اتصل بنا
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      التواصل عبر واتساب
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      خريطة الموقع
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      محلاتنا
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      أثاث وإضاءة اتش آند ام هوم
                    </a>
                    <a
                      className="d-block text-decoration-none w-100 my-3 my-md-2"
                      href="#"
                    >
                      بطاقة الهدايا الإلكترونية
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
              <h6>تواصل معنا</h6>
              <div className="text">
                كن أول المطلعين على التشكيلات الجديدة و العروض الحصرية
                والفعاليات في المحلات القريبة منك
              </div>

              <form className="mt-3 border-dark border-bottom border-1 d-inline-block w-100 d-flex justify-content-between">
                <input
                  type="text"
                  className="input border-0 py-2 w-100"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button
                  id="basic-addon1"
                  className="btn rounded-0 d-inline-block p-0 fw-bolder"
                >
                  سجل الآن
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
            <p className="head p-1 m-0">خدمة العملاء</p>
            <p className="p-1 m-0">مصر 24803822-02</p>
            <p className="p-1 m-0">
              أوقات العمل أيام السبت إلى الخميس من الساعة 9 صباحاً إلى 10 مساءً
              و أيام الجمعة من الساعة 1 مساءً إلى 10 مساءً. (بتوقيت مصر)
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
                مفهوم الأعمال لدى H&M هو تقديم أحدث صيحات الموضة والجودة العالية
                بأفضل الأسعار. ومنذ تأسيس H&M في عام 1947 نمت لتصبح واحدة من
                شركات الأزياء الرائدة في العالم. حقوق النشر محفوظة لموقع شركة
                H&M و هو مُلك Hennes H&M & Mauritz AB ©
              </p>
              <p>
                <a href="#" className="text-decoration-none ">
                  مصر
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
