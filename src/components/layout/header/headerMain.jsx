import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerMain.css"; // Import your custom CSS file
import React, { useContext, useEffect } from "react";
import langContext from "../../../services/context/langContext";
import StringManager from "../../../resources/stringManager";

const HeaderMain = () => {
  const [lang, setLang] = useContext(langContext);

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        {/* <Navbar.Brand href="#home">H&M</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center w-100">
            {/* <Nav.Link href="#en">{lang}</Nav.Link> */}

            <Nav.Link
              onClick={() => {
                setLang(lang == "ar" ? "en" : "ar");
              }}
            >
              {lang === "ar" ? "English" : "العربية"}
            </Nav.Link>
            <Nav.Link href="#search-location">
              {" "}
              {lang == "ar"
                ? StringManager.find.ar
                : StringManager.find.en}{" "}
            </Nav.Link>
            <Nav.Link href="#login">
              {" "}
              {lang == "ar"
                ? StringManager.login.ar
                : StringManager.login.en}{" "}
            </Nav.Link>
            <Nav.Link href="#register">
              {lang == "ar"
                ? StringManager.register.ar
                : StringManager.register.en}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMain;
