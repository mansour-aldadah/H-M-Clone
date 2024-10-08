import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // Importing social media icons
import "bootstrap/dist/css/bootstrap.min.css";

import "./register.css"; // Import your custom CSS file
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";
import "./Register.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [lang, setLang] = useContext(langContext);
  const navigate = useNavigate();

  return (
    <section className="registerPage m-auto" style={{ width: "80%" }}>
      <div className=" mb-4">
        <h3 className="m-2">
          <strong>
            {lang == "ar"
              ? StringManager.registerPageTitle.ar
              : StringManager.registerPageTitle.en}{" "}
          </strong>
        </h3>
        <Container fluid className="d-flex justify-content-around">
          <Row className="w-100 row-style ">
            <Col md={6} className="left-div">
              <p>
                <strong>
                  {lang == "ar"
                    ? StringManager.registerSubTitle.ar
                    : StringManager.registerSubTitle.en}
                </strong>
              </p>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control
                    className="border-top-only form-control shadow-none "
                    type="text"
                    placeholder={
                      lang == "ar"
                        ? StringManager.fullName.ar
                        : StringManager.fullName.en
                    }
                    name="name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={
                      lang == "ar"
                        ? StringManager.email.ar
                        : StringManager.email.en
                    }
                    className="border-top-only form-control shadow-none "
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder={
                      lang == "ar"
                        ? StringManager.password.ar
                        : StringManager.password.en
                    }
                    className="border-top-only form-control shadow-none "
                    required
                  />
                </Form.Group>
                <br />
                <p>
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  {lang == "ar"
                    ? StringManager.exclusiveDeals.ar
                    : StringManager.exclusiveDeals.en}
                </p>
                <p>
                  {lang == "ar"
                    ? StringManager.termsAndConditions.ar
                    : StringManager.termsAndConditions.en}
                  &nbsp;
                  <a
                    onClick={() => navigate(`/Terms`)}
                    style={{ cursor: "pointer" }}
                  >
                    {lang == "ar"
                      ? StringManager.termsAndConditionsLink.ar
                      : StringManager.termsAndConditionsLink.en}
                    &nbsp;
                  </a>
                  {lang == "ar" ? StringManager.and.ar : StringManager.and.en}
                  &nbsp;
                  <a
                    onClick={() => navigate(`/PrivacyPolicy`)}
                    style={{ cursor: "pointer" }}
                  >
                    {lang == "ar"
                      ? StringManager.privacyAndPolicyLink.ar
                      : StringManager.privacyAndPolicyLink.en}
                  </a>
                </p>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn_style social-media-buttons border-0"
                >
                  {lang == "ar"
                    ? StringManager.createAnAcc.ar
                    : StringManager.createAnAcc.en}
                </Button>
              </Form>
            </Col>

            <Col md={6} className="right-div">
              <p>
                <strong>
                  {lang == "ar"
                    ? StringManager.signInWith.ar
                    : StringManager.signInWith.en}
                </strong>
              </p>
              <div>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  // style={{ width: '100%' }}
                  onClick={() =>
                    window.open("https://www.facebook.com/HM", "_blank")
                  }
                >
                  <FaFacebook size={20} className="me-2" />
                  {lang == "ar"
                    ? StringManager.facebookSignIn.ar
                    : StringManager.facebookSignIn.en}
                </Button>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons"
                  // style={{ width: '100%' }}
                  onClick={() =>
                    window.open("https://accounts.google.com", "_blank")
                  }
                >
                  <FaGoogle size={20} className="me-2" />
                  {lang == "ar"
                    ? StringManager.googleSignIn.ar
                    : StringManager.googleSignIn.en}
                </Button>
                <p>
                  {lang == "ar"
                    ? StringManager.alreadyHaveAcc.ar
                    : StringManager.alreadyHaveAcc.en}{" "}
                </p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons "
                  // style={{ width: '100%'  }}
                  onClick={() => navigate(`/login`)}
                >
                  {lang == "ar"
                    ? StringManager.signInButton.ar
                    : StringManager.signInButton.en}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default RegisterPage;
