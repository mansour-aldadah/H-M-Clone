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

function HomePage() {
  const [isMobile, setIsMobile] = useState(true);

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
      <section className="homePage">
        <div className="Root-1">
          <div className="home-content">
            <Row>
              <Col>
                <div className="campaign-container col-lg-10 col-md-12 ">
                  {isMobile ? (
                    <Carousel className="pb-2">
                      <Carousel.Item className="C-Item">
                        <a href="#">
                          التوصيل المجاني للطلبيات الأكثر من 1999 ج.م
                        </a>
                      </Carousel.Item>
                      <Carousel.Item className="C-Item">
                        <a href="#">
                          خدمة الإرجاع مجاناً متوفرة أونلاين وفي المحلات
                        </a>
                      </Carousel.Item>
                      <Carousel.Item className="C-Item">
                        <a href="#">تسوق اونلاين 24/7</a>
                      </Carousel.Item>
                    </Carousel>
                  ) : (
                    <div className="d-flex D-SH pb-4">
                      <div>
                        <a href="#">
                          التوصيل المجاني للطلبيات الأكثر من 1999 ج.م
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          خدمة الإرجاع مجاناً متوفرة أونلاين وفي المحلات
                        </a>
                      </div>
                      <div>
                        <a href="#">تسوق اونلاين 24/7</a>
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
                          <a href="#">تشكيلة خريف/شتاء 2024</a>
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
                          <a href="#">تشكيلة خريف/شتاء 2024</a>
                        </div>

                        <div className="campaign-btn">
                          <a href="#">تسوقوا الآن</a>
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
                            <a href="#"> تشكيلة رياضية عصرية فاخرة</a>
                          </div>
                          <div className="campaign-caption-hp-mobile">
                            <a href="#">
                              {" "}
                              جينزات وجاكيتات فضفاضة, وملابس محبوكة لامعة
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
                            <a href="#">تشكيلة رياضية عصرية فاخرة</a>
                          </div>
                          <div className="campaign-caption-hp pt-2">
                            <a href="#">
                              {" "}
                              جينزات وجاكيتات فضفاضة, وملابس محبوكة لامعة
                            </a>
                          </div>
                        </div>

                        <div className="campaign-btn">
                          <a href="#">تسوقي الآن</a>
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
                            <a href="">تصاميم بسيطة فاخرة</a>
                          </div>
                          <div className="campaign-caption-hp-mobile">
                            <a href="">
                              {" "}
                              اكتشف التشكيلة الحالية من الإطلالات الراقية.
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
                            <a href="#"> تصاميم بسيطة فاخرة</a>
                          </div>
                          <div className="campaign-caption-hp pt-2">
                            <a href="#">
                              {" "}
                              اكتشف التشكيلة الحالية من الإطلالات الراقية.{" "}
                            </a>
                          </div>
                        </div>

                        <div className="campaign-btn">
                          <a href="#">تسوق الآن</a>
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
                            <a href="">خامات ناعمة</a>
                          </div>
                          <div className="campaign-caption-hp-mobile">
                            <a href=""> اكتشفوا أنعم البطانيات والوسائد.</a>
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
                            <a href="#"> خامات ناعمة </a>
                          </div>
                          <div className="campaign-caption-hp pt-2">
                            <a href="#"> اكتشفوا أنعم البطانيات والوسائد. </a>
                          </div>
                        </div>

                        <div className="campaign-btn">
                          <a href="#">تسوقوا الآن</a>
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
    </>
  );
}

export default HomePage;
