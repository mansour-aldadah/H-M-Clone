import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

export default function ContactUs() {
  const [first, setFirst] = useState("ملاحظات");
  const [second, setSecond] = useState("النوع");
  const [third, setThird] = useState();
  const [lang, setLang] = useContext(langContext);

  const handleFirstSelectChange = (e) => {
    setFirst(e.target.value);
    setSecond("");
    setThird("");
  };

  return (
    <section className="call-us">
      <Container className="py-3">
        <div className="call-us-main">
          <h3 className="p-0 m-0">
            {lang == "ar"
              ? StringManager.contactUs.ar
              : StringManager.contactUs.en}{" "}
          </h3>
          <hr className="mt-2" />
          <p className="fw-bold">
            {lang == "ar"
              ? StringManager.preferedChannel.ar
              : StringManager.preferedChannel.en}{" "}
          </p>
          <Form>
            <div className="d-flex m-0 p-0 align-items-center rat">
              <Form.Check
                type="radio"
                id="email"
                name="contact"
                label={
                  lang == "ar"
                    ? StringManager.emailContact.ar
                    : StringManager.emailContact.en
                }
                value="email"
                className="mx-2 d-flex"
                style={{ color: "black" }} // Adjust color if necessary
              />
              <Form.Check
                type="radio"
                id="mobile"
                name="contact"
                label={
                  lang == "ar" ? StringManager.phone.ar : StringManager.phone.en
                }
                value="mobile"
                className="mx-2 d-flex"
                style={{ color: "black" }} // Adjust color if necessary
              />
            </div>
            <Row className="my-3">
              <Col xs="6">
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.fName.ar
                      : StringManager.fName.en
                  }
                  className=""
                >
                  <Form.Control
                    type="email"
                    className="shadow-none border-0 "
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                </FloatingLabel>
              </Col>
              <Col xs="6">
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.lName.ar
                      : StringManager.lName.en
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    className="shadow-none border-0"
                    placeholder=""
                    dir="rtl"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="my-3 selected2">
              <Col xs="6">
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.mobileNum.ar
                      : StringManager.mobileNum.en
                  }
                  className="ps-5"
                >
                  <Form.Control
                    dir="ltr"
                    type="email"
                    className="shadow-none border-0 d-block"
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                  <p className="position-absolute class-220">20+</p>
                </FloatingLabel>
              </Col>{" "}
            </Row>
            <Row className="my-3">
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.emailAddress.ar
                      : StringManager.emailAddress.en
                  }
                  className=""
                >
                  <Form.Control
                    type="email"
                    className="shadow-none border-0 "
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3 mt-5">
              <Col xs="12" className="mb-3">
                <Form.Select
                  aria-label="Default select example shadow-0"
                  onChange={handleFirstSelectChange} // Handle first selection change
                  className="rounded-0 shadow-none text-muted"
                >
                  <option value="ملاحظات">
                    {lang == "ar"
                      ? StringManager.feedBack.ar
                      : StringManager.feedBack.en}
                  </option>
                  <option value="التسوق أونلاين">
                    {lang == "ar"
                      ? StringManager.onlineShop.ar
                      : StringManager.onlineShop.en}{" "}
                  </option>
                  <option value="الملاحظات والاستفسار">
                    {lang == "ar"
                      ? StringManager.inquiryFeed.ar
                      : StringManager.inquiryFeed.en}
                  </option>
                </Form.Select>
              </Col>

              {(first === "الملاحظات والاستفسار" ||
                first === "التسوق أونلاين") && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    className="rounded-0 shadow-none text-muted"
                    aria-label="Default select example shadow-0"
                    onChange={(e) => setSecond(e.target.value)} // Handle second selection change
                  >
                    <option value="النوع">
                      {lang == "ar"
                        ? StringManager.type.ar
                        : StringManager.type.en}
                    </option>
                    <option value="الشكوى">
                      {lang == "ar"
                        ? StringManager.complaint.ar
                        : StringManager.complaint.en}
                    </option>
                    <option value="الاستفسار">
                      {lang == "ar"
                        ? StringManager.inquiry.ar
                        : StringManager.inquiry.en}
                    </option>
                  </Form.Select>
                </Col>
              )}

              {second === "الشكوى" && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    aria-label="Default select example shadow-0"
                    className="rounded-0 shadow-none text-muted"
                    onChange={(e) => setThird(e.target.value)} // Handle third selection (for الشكوى)
                  >
                    <option value="حدّد السبب">
                      {lang == "ar"
                        ? StringManager.selectReason.ar
                        : StringManager.selectReason.en}{" "}
                    </option>
                    <option value="نادي امتيازات الشايع">
                      {lang == "ar"
                        ? StringManager.shaya.ar
                        : StringManager.shaya.en}
                    </option>
                    <option value="منتجات معيبة">
                      {lang == "ar"
                        ? StringManager.faultyItems.ar
                        : StringManager.faultyItems.en}{" "}
                    </option>
                    <option value="بطاقة الشايع">
                      {lang == "ar"
                        ? StringManager.shayaCard.ar
                        : StringManager.shayaCard.en}{" "}
                    </option>
                    <option value="لم يتم استلام المبلغ">
                      {lang == "ar"
                        ? StringManager.notReceived.ar
                        : StringManager.notReceived.en}
                    </option>
                    <option value="الخدمات المتوفرة داخل المحل">
                      {lang == "ar"
                        ? StringManager.inStoreServ.ar
                        : StringManager.inStoreServ.en}
                    </option>
                    <option value="الأخرى">
                      {lang == "ar"
                        ? StringManager.others.ar
                        : StringManager.others.en}
                    </option>
                  </Form.Select>
                </Col>
              )}

              {second === "الاستفسار" && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    aria-label="Default select example shadow-0"
                    className="rounded-0 shadow-none text-muted"
                    onChange={(e) => setThird(e.target.value)} // Handle third selection (for الاستفسار)
                  >
                    <option value="حدّد السبب">
                      {lang == "ar"
                        ? StringManager.selectReason.ar
                        : StringManager.selectReason.en}{" "}
                    </option>
                    <option value="بطاقة الشايع">
                      {lang == "ar"
                        ? StringManager.shayaCard.ar
                        : StringManager.shayaCard.en}{" "}
                    </option>
                    <option value="نادي امتيازات الشايع">
                      {lang == "ar"
                        ? StringManager.shaya.ar
                        : StringManager.shaya.en}
                    </option>
                    <option value="سياسة الاستبدال والاسترجاع">
                      سياسة الاستبدال والاسترجاع
                    </option>
                    <option value="الأخرى">
                      {lang == "ar"
                        ? StringManager.others.ar
                        : StringManager.others.en}
                    </option>
                  </Form.Select>
                </Col>
              )}
            </Row>
            <Row className="my-3 selected">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.orderNum.ar
                      : StringManager.orderNum.en
                  }
                  className=""
                >
                  <Form.Control
                    type="text"
                    className="shadow-none border-0 "
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="my-3 selected">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.missingItems.ar
                      : StringManager.missingItems.en
                  }
                  className=""
                >
                  <Form.Control
                    type="text"
                    className="shadow-none border-0 "
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    lang == "ar"
                      ? StringManager.message.ar
                      : StringManager.message.en
                  }
                  className="position-relative"
                >
                  <Form.Control
                    type="email"
                    className="shadow-none border-0"
                    placeholder=""
                    style={{ backgroundColor: "red" }}
                  />
                  <p className="position-absolute class-220">220</p>
                </FloatingLabel>
              </Col>
            </Row>
            <Button className="mt-3 rounded-0 fw-blod bg-dark border-0">
              {lang == "ar"
                ? StringManager.submitButton.ar
                : StringManager.submitButton.en}
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
}
