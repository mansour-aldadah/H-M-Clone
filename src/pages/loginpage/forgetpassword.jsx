import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

const ForgotPassword = () => {
  const [lang, setLang] = useContext(langContext);
  return (
    <section className="forgetPassword">
      <div className="mb-4">
        <h4 className="text-right">
          <strong>
            {lang == "ar"
              ? StringManager.forgotPasswordTitle.ar
              : StringManager.forgotPasswordTitle.en}
          </strong>
        </h4>
        <Container fluid className="d-flex" dir="rtl">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6}>
              <p>
                <strong>
                  {lang == "ar"
                    ? StringManager.enterEmail.ar
                    : StringManager.enterEmail.en}
                  <br />
                  {lang == "ar"
                    ? StringManager.sendEmail.ar
                    : StringManager.sendEmail.en}
                </strong>
              </p>

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    {lang == "ar"
                      ? StringManager.emailLabel.ar
                      : StringManager.emailLabel.en}
                  </Form.Label>
                  <Form.Control
                    type="email"
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
                  {lang == "ar"
                    ? StringManager.submitButton.ar
                    : StringManager.submitButton.en}
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
