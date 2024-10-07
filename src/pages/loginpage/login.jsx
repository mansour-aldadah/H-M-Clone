import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa"; // Importing social media icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"; // Import your custom CSS file
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";
import "./Register.css"; // Import your custom CSS file
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [lang, setLang] = useContext(langContext);

  const navigate = useNavigate();

  return (
    <section className="loginPage">
      <div className=" mb-4">
        <h4 className="text-right">
          <strong>
            {lang == "ar"
              ? StringManager.loginTitle.ar
              : StringManager.loginTitle.en}
          </strong>
        </h4>
        <Container fluid className="d-flex ">
          <Row className="w-100 row-style justify-content-center">
            <Col md={6} className="left-div">
              <p>
                <strong>
                  {" "}
                  {lang == "ar"
                    ? StringManager.loginSubTitle.ar
                    : StringManager.loginSubTitle.en}{" "}
                </strong>
              </p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder={
                      lang == "ar"
                        ? StringManager.emailLabel.ar
                        : StringManager.emailLabel.en
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
                        ? StringManager.passwordLabel.ar
                        : StringManager.passwordLabel.en
                    }
                    className="border-top-only form-control shadow-none "
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
                    ? StringManager.signInButton.ar
                    : StringManager.signInButton.en}
                </Button>

                <a href="/forgotpassword">
                  {lang == "ar"
                    ? StringManager.forgotPasswordLink.ar
                    : StringManager.forgotPasswordLink.en}
                </a>

                <a onClick={() => navigate(`/forgetpassword`)}>
                  {lang == "ar"
                    ? StringManager.forgotPasswordLink.ar
                    : StringManager.forgotPasswordLink.en}
                </a>
              </Form>
            </Col>

            <Col md={6} className="right-div">
              <p>
                <strong>
                  {lang == "ar"
                    ? StringManager.signInWith.ar
                    : StringManager.signInWith.en}{" "}
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
                    ? StringManager.dontHaveAcc.ar
                    : StringManager.dontHaveAcc.en}{" "}
                </p>
                <Button
                  variant="outline-dark"
                  className="mb-2 social-media-buttons "
                  // style={{ width: '100%'  }}

                  onClick={() => navigate(`/register`)}
                >
                  {lang == "ar"
                    ? StringManager.signUpLink.ar
                    : StringManager.signUpLink.en}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LoginPage;
