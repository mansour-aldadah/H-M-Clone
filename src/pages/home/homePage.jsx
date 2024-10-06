import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import "./homePageStyle.css";
import image1 from "./HomePageImages/image1.jpg";
import image2 from "./HomePageImages/image2.jpg";
import image3 from "./HomePageImages/image3.jpg";
import image4 from "./HomePageImages/image4.0.jpg";
import image41 from "./HomePageImages/image4.1.jpg";
import image5 from "./HomePageImages/image5.jpg";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

function HomePage() {
  const [isMobile, setIsMobile] = useState(true);
  const [lang, setLang] = useContext(langContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="Root-1">
        <div className="home-content">
          <section className="homePage">
            <div className="Root-1">
              <div className="home-content">
                <Row>
                  <Col>
                    <div className="campaign-container col-lg-10 col-md-12 ">
                      {isMobile ? (
                        <Carousel className="pb-2">
                          <Carousel.Item className="C-Item">
                            <a href="/DeliveryInformation">
                              {lang == "ar"
                                ? StringManager.freeDelivery.ar
                                : StringManager.freeDelivery.en}
                            </a>
                          </Carousel.Item>
                          <Carousel.Item className="C-Item">
                            <a href="ReturnExchange">
                              {lang == "ar"
                                ? StringManager.freeReturns.ar
                                : StringManager.freeReturns.en}
                            </a>
                          </Carousel.Item>
                          <Carousel.Item className="C-Item">
                            <a href="/DeliveryInformation">
                              {" "}
                              {lang == "ar"
                                ? StringManager.shopOnline.ar
                                : StringManager.shopOnline.en}
                            </a>
                          </Carousel.Item>
                        </Carousel>
                      ) : (
                        <div className="d-flex D-SH pb-4">
                          <div>
                            <a href="/DeliveryInformation">
                              {lang == "ar"
                                ? StringManager.freeDelivery.ar
                                : StringManager.freeDelivery.en}
                            </a>
                          </div>
                          <div>
                            <a href="/ReturnExchange">
                              {lang == "ar"
                                ? StringManager.freeReturns.ar
                                : StringManager.freeReturns.en}
                            </a>
                          </div>
                          <div>
                            <a href="/DeliveryInformation">
                              {lang == "ar"
                                ? StringManager.shopOnline.ar
                                : StringManager.shopOnline.en}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="campaign-container col-lg-10 col-md-12 ">
                      {isMobile ? (
                        <div className="campaign-mobile">
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image2} alt="" />
                            </a>
                          </div>
                          <div className="textbox-mobile">
                            <div className="campaign-heading-hp-mobile">
                              <a href="#">
                                {" "}
                                {lang == "ar"
                                  ? StringManager.campaignHeading1.ar
                                  : StringManager.campaignHeading1.en}
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image1} alt="" />
                            </a>
                          </div>
                          <div className="textbox">
                            <div className="campaign-first-heading-hp pb-5">
                              <a href="#">
                                {lang == "ar"
                                  ? StringManager.campaignHeading1.ar
                                  : StringManager.campaignHeading1.en}
                              </a>
                            </div>

                            <div className="campaign-btn">
                              <a href="#">
                                {lang == "ar"
                                  ? StringManager.campaignButtonThem.ar
                                  : StringManager.campaignButtonThem.en}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <Row className="pt-4">
                  <Col>
                    <div className="campaign-container col-lg-10 col-md-12 ">
                      {isMobile ? (
                        <div className="campaign-mobile">
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image3} alt="" />
                            </a>
                          </div>
                          <div className="textbox-mobile">
                            <div className="">
                              <div className="campaign-heading-hp-mobile">
                                <a href="#">
                                  {" "}
                                  {lang == "ar"
                                    ? StringManager.campaignHeading2.ar
                                    : StringManager.campaignHeading2.en}
                                </a>
                              </div>
                              <div className="campaign-caption-hp-mobile">
                                <a href="#">
                                  {lang == "ar"
                                    ? StringManager.campaignDesc2.ar
                                    : StringManager.campaignDesc2.en}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image3} alt="" />
                            </a>
                          </div>
                          <div className="textbox">
                            <div className="text">
                              <div className="campaign-heading-hp">
                                <a href="#">
                                  {lang == "ar"
                                    ? StringManager.campaignHeading2.ar
                                    : StringManager.campaignHeading2.en}
                                </a>
                              </div>
                              <div className="campaign-caption-hp pt-2">
                                <a href="#">
                                  {lang == "ar"
                                    ? StringManager.campaignDesc2.ar
                                    : StringManager.campaignDesc2.en}
                                </a>
                              </div>
                            </div>

                            <div className="campaign-btn">
                              <a href="#">
                                {lang == "ar"
                                  ? StringManager.campaignButtonShe.ar
                                  : StringManager.campaignButtonShe.en}{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pt-4">
                    <div className="campaign-container col-lg-10 col-md-12 ">
                      {isMobile ? (
                        <div className="campaign-mobile">
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image41} alt="" />
                            </a>
                          </div>
                          <div className="textbox-mobile">
                            <div className="">
                              <div className="campaign-heading-hp-mobile">
                                <a href="">
                                  {lang == "ar"
                                    ? StringManager.campaignHeading3.ar
                                    : StringManager.campaignHeading3.en}{" "}
                                </a>
                              </div>
                              <div className="campaign-caption-hp-mobile">
                                <a href="">
                                  {lang == "ar"
                                    ? StringManager.campaignDesc3.ar
                                    : StringManager.campaignDesc3.en}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image4} alt="" />
                            </a>
                          </div>
                          <div className="textbox">
                            <div className="text">
                              <div className="campaign-heading-hp">
                                <a href="#">
                                  {" "}
                                  {lang == "ar"
                                    ? StringManager.campaignHeading3.ar
                                    : StringManager.campaignHeading3.en}{" "}
                                </a>
                              </div>
                              <div className="campaign-caption-hp pt-2">
                                <a href="#">
                                  {lang == "ar"
                                    ? StringManager.campaignDesc3.ar
                                    : StringManager.campaignDesc3.en}
                                </a>
                              </div>
                            </div>

                            <div className="campaign-btn">
                              <a href="#">
                                {lang == "ar"
                                  ? StringManager.campaignButtonHe.ar
                                  : StringManager.campaignButtonHe.en}{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pt-4">
                    <div className="campaign-container col-lg-10 col-md-12 ">
                      {isMobile ? (
                        <div className="campaign-mobile">
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image5} alt="" />
                            </a>
                          </div>
                          <div className="textbox-mobile">
                            <div className="">
                              <div className="campaign-heading-hp-mobile">
                                <a href="">
                                  {lang == "ar"
                                    ? StringManager.campaignHeading4.ar
                                    : StringManager.campaignHeading4.en}{" "}
                                </a>
                              </div>
                              <div className="campaign-caption-hp-mobile">
                                <a href="">
                                  {" "}
                                  {lang == "ar"
                                    ? StringManager.campaignDesc4.ar
                                    : StringManager.campaignDesc4.en}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="campaign-hp">
                            <a href="#">
                              <img src={image5} alt="" />
                            </a>
                          </div>
                          <div className="textbox">
                            <div className="text">
                              <div className="campaign-heading-hp">
                                <a href="#">
                                  {" "}
                                  {lang == "ar"
                                    ? StringManager.campaignHeading4.ar
                                    : StringManager.campaignHeading4.en}{" "}
                                </a>
                              </div>
                              <div className="campaign-caption-hp pt-2">
                                <a href="#">
                                  {lang == "ar"
                                    ? StringManager.campaignDesc4.ar
                                    : StringManager.campaignDesc4.en}
                                </a>
                              </div>
                            </div>

                            <div className="campaign-btn">
                              <a href="#">
                                {" "}
                                {lang == "ar"
                                  ? StringManager.campaignButtonThem.ar
                                  : StringManager.campaignButtonThem.en}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
