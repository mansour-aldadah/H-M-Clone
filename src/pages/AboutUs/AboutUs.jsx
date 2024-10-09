import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./AboutUs.css";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

export default function AboutUs() {
  const [lang, setLang] = useContext(langContext);
  return (
    <section className="about-us py-5">
      <Container>
        <div className="main text-center">
          <h1>
            {" "}
            {lang == "ar"
              ? StringManager.aboutUSTitle.ar
              : StringManager.aboutUSTitle.en}
          </h1>
          <p className="py-3 px-3 px-md-5">
            {lang == "ar"
              ? StringManager.aboutUSpas1.ar
              : StringManager.aboutUSpas1.en}
          </p>
        </div>
        <hr className="m-auto" style={{ width: "200px" }} />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>
                {lang == "ar"
                  ? StringManager.aboutUSTitle2.ar
                  : StringManager.aboutUSTitle2.en}{" "}
              </h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {lang == "ar"
                  ? StringManager.aboutUSpas2.ar
                  : StringManager.aboutUSpas2.en}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>
                {" "}
                {lang == "ar"
                  ? StringManager.aboutUSTitle3.ar
                  : StringManager.aboutUSTitle3.en}{" "}
              </h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {lang == "ar"
                  ? StringManager.aboutUSpas3.ar
                  : StringManager.aboutUSpas3.en}
              </p>
            </div>
          </Col>
          <Col md="6"></Col>
        </Row>
        <hr />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>
                {" "}
                {lang == "ar"
                  ? StringManager.aboutUSTitle4.ar
                  : StringManager.aboutUSTitle4.en}
              </h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {lang == "ar"
                  ? StringManager.aboutUSpas4.ar
                  : StringManager.aboutUSpas4.en}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>
                {" "}
                {lang == "ar"
                  ? StringManager.aboutUSFegures.ar
                  : StringManager.aboutUSFegures.en}{" "}
              </h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                <ul className="text-end">
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSfigure1.ar
                      : StringManager.aboutUSfigure1.en}
                  </li>
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSfigure2.ar
                      : StringManager.aboutUSfigure2.en}
                  </li>
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSfigure3.ar
                      : StringManager.aboutUSfigure3.en}
                  </li>
                </ul>
              </p>
            </div>
          </Col>
          <Col md="6"></Col>
        </Row>
        <hr />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>
                {" "}
                {lang == "ar"
                  ? StringManager.aboutUSknow.ar
                  : StringManager.aboutUSknow.en}{" "}
              </h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                <ul className="text-end">
                  <li>
                    {" "}
                    {lang == "ar"
                      ? StringManager.aboutUSinfo1.ar
                      : StringManager.aboutUSinfo1.en}
                  </li>
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSinfo2.ar
                      : StringManager.aboutUSinfo2.en}
                  </li>
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSinfo3.ar
                      : StringManager.aboutUSinfo3.en}
                  </li>
                  <li>
                    {lang == "ar"
                      ? StringManager.aboutUSinfo4.ar
                      : StringManager.aboutUSinfo4.en}
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
