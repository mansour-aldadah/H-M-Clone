import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";

export default function ContactUs() {
  return (
    <section className="call-us" dir="rtl">
      <Container className="py-3">
        <div className="call-us-main">
          <h3 className="p-0 m-0">اتصل بنا</h3>
          <hr className="mt-2" />
          <Form>
            <div className="d-flex justify-content-center align-items-center">
              <Form.Check
                type="radio"
                id="mobile"
                name="contact"
                label="رقم الجوال"
                value="mobile"
                className="mx-2"
                style={{ color: "black" }} // Adjust color if necessary
              />
              <Form.Check
                type="radio"
                id="email"
                name="contact"
                label="البريد الإلكتروني"
                value="email"
                className="mx-2"
                style={{ color: "black" }} // Adjust color if necessary
              />
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
}
