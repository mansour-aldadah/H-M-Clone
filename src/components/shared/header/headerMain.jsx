import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerMain.css";

const HeaderMain = () => {
  return (
    <section className="headerMain">
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center w-100">
              <Nav.Link href="#english">english</Nav.Link>
              <Nav.Link href="#search-location">البحث عن محلاتنا</Nav.Link>
              <Nav.Link href="#login">تسجيل دخول</Nav.Link>
              <Nav.Link href="#register">تسجيل مستخدم جديد</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default HeaderMain;
