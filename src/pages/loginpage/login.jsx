
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Importing social media icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'; // Import your custom CSS file

const LoginPage = () => {
  return (
    <div className=" mb-4">
      <h4 className='text-right'><strong>تسجيل دخول </strong></h4>
      <Container fluid className="d-flex " dir="rtl">
        <Row className="w-100 row-style justify-content-center">
          <Col md={6} className="left-div">
            <p><strong>تسجيل الدخول عن طريق البريد الالكتروني</strong></p>
            <Form>
            
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" className="border-top-only form-control shadow-none " required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="كلمة المرور" className="border-top-only form-control shadow-none " required />
              </Form.Group>
              <br />
           
              <Button variant="primary" type="submit" className="btn_style social-media-buttons border-0">
                 تسجيل الدخول
              </Button>
              <a href="/forgot-password">هل نسيت كلمه السر؟</a>
            </Form>
          </Col>

          <Col md={6} className="right-div">
            <p><strong>او سجل عبر مواقع التواصل الاجتماعي</strong></p>
            <div >
              <Button
                variant="outline-dark"
                className="mb-2 social-media-buttons"
                // style={{ width: '100%' }}
                onClick={() => window.open('https://www.facebook.com/HM', '_blank')}
              >
                <FaFacebook size={20} className="me-2" />
                سجل الدخول عن طريق الفيس بوك
              </Button>
              <Button
                variant="outline-dark"
                className="mb-2 social-media-buttons"
                // style={{ width: '100%' }}
                onClick={() => window.open('https://accounts.google.com', '_blank')}
              >
                <FaGoogle size={20} className="me-2" />
                سجل الدخول عن طريق جوجل
              </Button>
              <p>ليس لديك حساب؟</p>
              <Button
                variant="outline-dark"
                className="mb-2 social-media-buttons "

                // style={{ width: '100%'  }}
                onClick={() => window.location.href = '/login'}
              >
                سجل هنا
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
