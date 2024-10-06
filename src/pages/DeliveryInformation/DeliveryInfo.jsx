import "./DeliveryInfoStyle.css";
import { Row, Col } from "react-bootstrap";
import image2 from "../../assets/deliveryPageImages/image1.jpg";
import image1 from "../../assets/deliveryPageImages/image2.jpg";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Nav, Card, Container } from "react-bootstrap";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

function DeliveryInformation() {
  const [isMobile, setIsMobile] = useState(true);
  const [activeTab, setActiveTab] = useState("capital");
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

  const renderContent = () => {
    switch (activeTab) {
      case "capital":
        return "القاهرة والجيزة";
      case "alexandria":
        return "الإسكندرية";
      case "canalCities":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none" }}>
              <li>بور سعيد</li>
              <li>الإسماعيلية</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li>السويس</li>
            </ul>
          </div>
        );
      case "delta":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none" }}>
              <li>القليوبية</li>
              <li>المنوفية</li>
              <li>الشرقية</li>
              <li>الغربية</li>
            </ul>

            <ul style={{ listStyle: "none" }}>
              <li>الدقهلية</li>
              <li>البحيرة</li>
              <li>دمياط</li>
              <li>كفر الشيخ</li>
            </ul>
          </div>
        );
      case "middleEgypt":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none" }}>
              <li>الفيوم</li>
              <li>بني سويف</li>
              <li>المنيا</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li>أسيوط</li>
              <li>سوهاج</li>
            </ul>
          </div>
        );
      case "upperEgypt":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none" }}>
              <li>قنا</li>
              <li> الأقصر</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li>أسوان</li>
            </ul>
          </div>
        );
      case "touristAreas":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none" }}>
              <li>البحر الأحمر</li>
              <li> جنوب سيناء</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li>الساحل الشمالي</li>
              <li>مرسى مطروح</li>
            </ul>
          </div>
        );
      case "remoteAreas":
        return (
          <div className="d-flex">
            <ul style={{ listStyle: "none", lineHeight: 2 }}>
              <li>الوادي الجديد </li>
              <li> شمال سيناء</li>
              <li>أبو سمبل </li>
              <li>مرسى علم </li>
            </ul>
            <ul style={{ listStyle: "none", lineHeight: 2 }}>
              <li> السلوم </li>
              <li> حلايب</li>
              <li> شلاتين </li>
            </ul>
          </div>
        );
      default:
        return "Select a tab to see the information.";
    }
  };

  return (
    <>
      <div className="Delivery-Info col-lg-10 col-md-12">
        <Row>
          <Col>
            <div className="Page-title">
              <div className="heading ">
                <h2>
                  {lang == "ar"
                    ? StringManager.deliveryTitle.ar
                    : StringManager.deliveryTitle.en}{" "}
                </h2>
              </div>
              <div className="line "></div>
            </div>
          </Col>
        </Row>
        <div className="page-content pt-3">
          <Row>
            <Col>
              <div className="pb-3">
                <p className="fw-bold m-1">
                  {lang == "ar"
                    ? StringManager.deliverySubtitle.ar
                    : StringManager.deliverySubtitle.en}
                </p>
                <p className="subtitles m-1">
                  {lang == "ar"
                    ? StringManager.deliverySubtitleDesc.ar
                    : StringManager.deliverySubtitleDesc.en}
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="choices">
                <p className="fw-bold fs-6 mb-1">
                  {" "}
                  {lang == "ar"
                    ? StringManager.deliveryOptions.ar
                    : StringManager.deliveryOptions.en}
                </p>
                <ul className="">
                  <li>
                    {lang == "ar"
                      ? StringManager.option1.ar
                      : StringManager.option1.en}
                  </li>
                </ul>
              </div>

              <div className="receive">
                <p className="fw-bold m-1">
                  {lang == "ar"
                    ? StringManager.clickCollect.ar
                    : StringManager.clickCollect.en}
                </p>
                <ul>
                  <li>
                    {lang == "ar"
                      ? StringManager.clickCollectDesc.ar
                      : StringManager.clickCollectDesc.en}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="safety fw-bold" style={{ fontSize: "12px" }}>
                <p className="mb-1">
                  {lang == "ar"
                    ? StringManager.safetyMeasures.ar
                    : StringManager.safetyMeasures.en}{" "}
                </p>
                <p style={{ opacity: 0.8 }}>
                  {lang == "ar"
                    ? StringManager.safetyMeasuresDesc.ar
                    : StringManager.safetyMeasuresDesc.en}
                </p>
                <div className="pb-3">
                  {isMobile ? (
                    <img className="col-sm-12 col-12" src={image1} alt="" />
                  ) : (
                    <img className="col-lg-12 col-md-12" src={image2} alt="" />
                  )}
                </div>
                <p style={{ opacity: 0.8 }}>
                  {lang == "ar"
                    ? StringManager.safetyMeasuresSub.ar
                    : StringManager.safetyMeasuresSub.en}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                {isMobile ? (
                  <Accordion defaultActiveKey={["0"]}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.capital.ar
                          : StringManager.capital.en}
                      </Accordion.Header>
                      <Accordion.Body>
                        {lang == "ar"
                          ? StringManager.cairoGiza.ar
                          : StringManager.cairoGiza.en}{" "}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.alexandria.ar
                          : StringManager.alexandria.en}
                      </Accordion.Header>
                      <Accordion.Body>
                        {lang == "ar"
                          ? StringManager.alexandria.ar
                          : StringManager.alexandria.en}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.suezCanal.ar
                          : StringManager.suezCanal.en}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.portSaid.ar
                              : StringManager.portSaid.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.ismailia.ar
                              : StringManager.ismailia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.suez.ar
                              : StringManager.suez.en}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.delta.ar
                          : StringManager.delta.en}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.qalyubia.ar
                              : StringManager.qalyubia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.menoufia.ar
                              : StringManager.menoufia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.sharqia.ar
                              : StringManager.sharqia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.gharbia.ar
                              : StringManager.gharbia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.dakahlia.ar
                              : StringManager.dakahlia.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.beheira.ar
                              : StringManager.beheira.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.damietta.ar
                              : StringManager.damietta.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.kafrElSheikh.ar
                              : StringManager.kafrElSheikh.en}{" "}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.centralEgypt.ar
                          : StringManager.centralEgypt.en}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.fayoum.ar
                              : StringManager.fayoum.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.beniSuef.ar
                              : StringManager.beniSuef.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.minya.ar
                              : StringManager.minya.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.assiut.ar
                              : StringManager.assiut.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.sohag.ar
                              : StringManager.sohag.en}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.upperEgypt.ar
                          : StringManager.upperEgypt.en}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.qena.ar
                              : StringManager.qena.en}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.luxor.ar
                              : StringManager.luxor.en}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.aswan.ar
                              : StringManager.aswan.en}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        {" "}
                        {lang == "ar"
                          ? StringManager.touristique.ar
                          : StringManager.touristique.en}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.redSea.ar
                              : StringManager.redSea.en}{" "}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.southSinai.ar
                              : StringManager.southSinai.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.northCoast.ar
                              : StringManager.northCoast.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.marsaMatrouh.ar
                              : StringManager.marsaMatrouh.en}{" "}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        {lang == "ar"
                          ? StringManager.remoteAreas.ar
                          : StringManager.remoteAreas.en}{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none", lineHeight: 2 }}>
                          <li>
                            {lang == "ar"
                              ? StringManager.newValley.ar
                              : StringManager.newValley.en}{" "}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.northSinai.ar
                              : StringManager.northSinai.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.abuSimbel.ar
                              : StringManager.abuSimbel.en}{" "}
                          </li>
                          <li>
                            {lang == "ar"
                              ? StringManager.marsaAlam.ar
                              : StringManager.marsaAlam.en}{" "}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.salloum.ar
                              : StringManager.salloum.en}{" "}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.halayeb.ar
                              : StringManager.halayeb.en}
                          </li>
                          <li>
                            {" "}
                            {lang == "ar"
                              ? StringManager.shalateen.ar
                              : StringManager.shalateen.en}{" "}
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <Container className="pt-5" style={{ fontSize: "12px" }}>
                    <Nav
                      fill
                      variant="tabs"
                      activeKey={activeTab}
                      onSelect={(k) => setActiveTab(k)}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="capital">
                          {lang == "ar"
                            ? StringManager.capital.ar
                            : StringManager.capital.en}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="alexandria">
                          {lang == "ar"
                            ? StringManager.alexandria.ar
                            : StringManager.alexandria.en}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="canalCities">
                          {lang == "ar"
                            ? StringManager.suezCanal.ar
                            : StringManager.suezCanal.en}{" "}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="delta">
                          {lang == "ar"
                            ? StringManager.delta.ar
                            : StringManager.delta.en}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="middleEgypt">
                          {lang == "ar"
                            ? StringManager.centralEgypt.ar
                            : StringManager.centralEgypt.en}{" "}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="upperEgypt">
                          {lang == "ar"
                            ? StringManager.upperEgypt.ar
                            : StringManager.upperEgypt.en}{" "}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="touristAreas">
                          {lang == "ar"
                            ? StringManager.touristique.ar
                            : StringManager.touristique.en}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="remoteAreas">
                          {lang == "ar"
                            ? StringManager.remoteAreas.ar
                            : StringManager.remoteAreas.en}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Card className="mt-3">
                      <Card.Body>{renderContent()}</Card.Body>
                    </Card>
                  </Container>
                )}
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <div className="payment-choices">
                <h2 className="fw-bold pb-3" style={{ fontSize: "15px" }}>
                  {lang == "ar"
                    ? StringManager.paymentOptions.ar
                    : StringManager.paymentOptions.en}
                </h2>
                <div className="pb-3" style={{ fontSize: "12px" }}>
                  <p className="fw-bold">
                    {lang == "ar"
                      ? StringManager.creditDebit.ar
                      : StringManager.creditDebit.en}
                  </p>
                  <p>
                    {lang == "ar"
                      ? StringManager.creditDebitDesc.ar
                      : StringManager.creditDebitDesc.en}
                  </p>
                </div>
                <div
                  className="pb-3"
                  style={{ lineHeight: 0.8, fontSize: "12px" }}
                >
                  <p className="fw-bold">
                    {lang == "ar"
                      ? StringManager.cashOnDelivery.ar
                      : StringManager.cashOnDelivery.en}{" "}
                  </p>
                  <p>
                    {" "}
                    {lang == "ar"
                      ? StringManager.cashOnDeliveryDesc.ar
                      : StringManager.cashOnDeliveryDesc.en}
                  </p>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <p className="fw-bold">
                    {" "}
                    {lang == "ar"
                      ? StringManager.clickCollectService.ar
                      : StringManager.clickCollectService.en}{" "}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc1.ar
                      : StringManager.clickCollectServiceDesc1.en}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc2.ar
                      : StringManager.clickCollectServiceDesc2.en}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc3.ar
                      : StringManager.clickCollectServiceDesc3.en}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc4.ar
                      : StringManager.clickCollectServiceDesc4.en}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc5.ar
                      : StringManager.clickCollectServiceDesc5.en}
                  </p>

                  <p>
                    {lang == "ar"
                      ? StringManager.clickCollectServiceDesc6.ar
                      : StringManager.clickCollectServiceDesc6.en}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DeliveryInformation;
