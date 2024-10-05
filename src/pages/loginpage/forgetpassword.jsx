import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <section className="forgetPassword">
      <div className="mb-4">
        <h4 className="text-right">
          <strong>نسيت كلمة المرور؟</strong>
        </h4>
        <Container fluid className="d-flex" dir="rtl">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6}>
              <p>
                <strong>
                  أدخل عنوان بريدك الإلكتروني سنرسل لك رابط إعادة تعيين كلمة
                  المرور
                </strong>
              </p>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="border-top-only form-control shadow-none"
                    required
                  />
                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                >
                  إرسال رابط إعادة تعيين كلمة المرور
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ForgotPassword;
