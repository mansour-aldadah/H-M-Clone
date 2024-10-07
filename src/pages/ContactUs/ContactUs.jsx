import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { faN } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [first, setFirst] = useState("ملاحظات");
  const [second, setSecond] = useState("النوع");
  const [third, setThird] = useState();

  const handleFirstSelectChange = (e) => {
    setFirst(e.target.value);
    setSecond("");
    setThird("");
  };

  return (
    <section className="call-us">
      <Container className="py-3">
        <div className="call-us-main">
          <h3 className="p-0 m-0">اتصل بنا</h3>
          <hr className="mt-2" />
          <p className="fw-bold">حدد قناة الاتصال المفضلة لديك</p>
          <Form>
            <div className="d-flex m-0 p-0 align-items-center rat">
              <Form.Check
                type="radio"
                id="email"
                name="contact"
                label="البريد الإلكتروني"
                value="email"
                className="mx-2 d-flex"
                style={{ color: "black" }} // Adjust color if necessary
              />
              <Form.Check
                type="radio"
                id="mobile"
                name="contact"
                label="رقم الجوال"
                value="mobile"
                className="mx-2 d-flex"
                style={{ color: "black" }} // Adjust color if necessary
              />
            </div>
            <Row className="my-3">
              <Col xs="6">
                <FloatingLabel
                  controlId="floatingInput"
                  label="الاسم الأول"
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
                  label="اسم العائلة"
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
                  label="رقم الجوال"
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
                  label="البريد الإلكتروني"
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
                  <option value="ملاحظات">ملاحظات</option>
                  <option value="التسوق أونلاين">التسوق أونلاين</option>
                  <option value="الملاحظات والاستفسار">
                    الملاحظات والاستفسار
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
                    <option value="النوع">النوع</option>
                    <option value="الشكوى">الشكوى</option>
                    <option value="الاستفسار">الاستفسار</option>
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
                    <option value="حدّد السبب">حدّد السبب</option>
                    <option value="نادي امتيازات الشايع">
                      نادي امتيازات الشايع
                    </option>
                    <option value="منتجات معيبة">منتجات معيبة</option>
                    <option value="بطاقة الشايع">بطاقة الشايع</option>
                    <option value="لم يتم استلام المبلغ">
                      لم يتم استلام المبلغ
                    </option>
                    <option value="الخدمات المتوفرة داخل المحل">
                      الخدمات المتوفرة داخل المحل
                    </option>
                    <option value="الأخرى">الأخرى</option>
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
                    <option value="حدّد السبب">حدّد السبب</option>
                    <option value="بطاقة الشايع">بطاقة الشايع</option>
                    <option value="نادي امتيازات الشايع">
                      نادي امتيازات الشايع
                    </option>
                    <option value="سياسة الاستبدال والاسترجاع">
                      سياسة الاستبدال والاسترجاع
                    </option>
                    <option value="الأخرى">الأخرى</option>
                  </Form.Select>
                </Col>
              )}
            </Row>
            <Row className="my-3 selected">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label="رقم الطلبية (اختياري)"
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
            <Row className="my-3 selected">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label="العناصر المفقودة (اختياري)"
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
            <Row className="my-3">
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label="رسالة نصية"
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
              إرسال
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
}
