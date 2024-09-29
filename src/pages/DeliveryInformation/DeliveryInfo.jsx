import "./DeliveryInfoStyle.css";
import { Row, Col } from "react-bootstrap";
import image1 from "./deliveryPageImages/image1.jpg";
import image2 from "./deliveryPageImages/image2.jpg";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Nav, Card, Container } from "react-bootstrap";

/* function DeliveryInformation() {
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
  }, []); */

function DeliveryInformation() {
  const [isMobile, setIsMobile] = useState(true);
  const [activeTab, setActiveTab] = useState("capital");

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
                <h2>معلومات التوصيل</h2>
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
                  خدمة التوصيل متوفرة لجميع المناطق في مصر.
                </p>
                <p className="subtitles m-1">
                  بمجرد إكمال عملية الشراء الخاصة بك سنقوم بتجهيز طلبيتك. وسنرسل
                  لك رسالة تأكيد على عنوان البريد الإلكتروني الذي قمت بإدخاله
                  يتضمن المنتجات التي قمت بشرائها، وأسعارها.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="choices">
                <p className="fw-bold mb-1">خيارات التوصيل</p>
                <ul className="">
                  <li className="pb-2">
                    <p className="m-0" style={{ color: 666666 }}>
                      <span className="fw-bold">التوصيل في نفس اليوم</span>-
                      اطلب قبل الساعة 10 صباحاً واستلم طلبيتك في نفس اليوم. (غير
                      شامل الأثاث). تكلفة التوصيل 150 ج.م.
                    </p>
                    <ul className="" style={{ opacity: 0.8 }}>
                      <li>
                        يرجى العلم خدمة التوصيل في نفس اليوم لا تتضمن بعض
                        المناطق.
                      </li>
                      <li>جميع المناطق المتاحة سوف تظهر في صفحة الدفع.</li>
                      <li>خدمة التوصيل في نفس اليوم غير متوفرة يوم الجمعة.</li>
                    </ul>
                  </li>
                  <li>
                    التوصيل العادي - تكلفة التوصيل 99 ج.م.، أو التوصيل المجاني
                    للطلبيات الأكثر من 1999 ج.م. يرجى العلم بأن توصيل الطلبيات
                    يستغرق من 1-5 أيام.
                  </li>
                </ul>
              </div>

              <div className="receive">
                <p className="fw-bold m-1">خدمة الاستلام من محلاتنا</p>
                <ul>
                  <li>
                    اطلب أونلاين وأستلم طلبيتك من أي محل تفضله خلال 2-5 أيام.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="safety fw-bold" style={{ fontSize: "12px" }}>
                <p className="mb-1">إجراءات السلامة</p>
                <p style={{ opacity: 0.8 }}>
                  نؤكد لكم التزامنا التام بإجراءات التعقيم والنظافة في جميع
                  العمليات الخاصة بعملية الطلب والتوصيل من خلال سلسلة من
                  التدابير الاحترازية التي تتضمن:
                </p>
                <div className="pb-3">
                  {isMobile ? (
                    <img className="col-sm-12 col-12" src={image1} alt="" />
                  ) : (
                    <img className="col-lg-12 col-md-12" src={image2} alt="" />
                  )}
                </div>
                <p style={{ opacity: 0.8 }}>
                  سوف نحرص دائماً على إتباع جميع الإجراءات الصحية ووسائل التعقيم
                  والنظافة لنوفر لكم تجربة تسوق مريحة وآمنة من المنزل.
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
                      <Accordion.Header>العاصمة</Accordion.Header>
                      <Accordion.Body>القاهرة والجيزة</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>الإسكندرية</Accordion.Header>
                      <Accordion.Body>الإسكندرية</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>مدن القناة</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>بور سعيد</li>
                          <li>الإسماعيلية</li>
                          <li>السويس</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>الدلتا</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>القليوبية</li>
                          <li>المنوفية</li>
                          <li>الشرقية</li>
                          <li>الغربية</li>
                          <li>الدقهلية</li>
                          <li>البحيرة</li>
                          <li>دمياط</li>
                          <li>كفر الشيخ</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>وسط مصر</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>الفيوم</li>
                          <li>بني سويف</li>
                          <li>المنيا</li>
                          <li>أسيوط</li>
                          <li>سوهاج</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>صعيد مصر</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>قنا</li>
                          <li> الأقصر</li>
                          <li>أسوان</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header> المناطق السياحية</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none" }}>
                          <li>البحر الأحمر</li>
                          <li> جنوب سيناء</li>
                          <li>الساحل الشمالي</li>
                          <li>مرسى مطروح</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header> المناطق البعيدة</Accordion.Header>
                      <Accordion.Body>
                        <ul style={{ listStyle: "none", lineHeight: 2 }}>
                          <li>الوادي الجديد </li>
                          <li> شمال سيناء</li>
                          <li>أبو سمبل </li>
                          <li>مرسى علم </li>
                          <li> السلوم </li>
                          <li> حلايب</li>
                          <li> شلاتين </li>
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
                        <Nav.Link eventKey="capital">العاصمة</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="alexandria">الإسكندرية</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="canalCities">مدن القناة</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="delta">الدلتا</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="middleEgypt">وسط مصر</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="upperEgypt">صعيد مصر</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="touristAreas">
                          المناطق السياحية
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="remoteAreas">
                          المناطق البعيدة
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
                  خيارات الدفع
                </h2>
                <div className="pb-3" style={{ fontSize: "12px" }}>
                  <p className="fw-bold">
                    البطاقات الائتمانية/ بطاقات الخصم المباشر
                  </p>
                  <p>
                    نحن نقبل الدفع عن طريق البطاقات الائتمانية /أو بطاقات الخصم
                    المباشر المحلية والدولية مثل فيزا وماستر كارد.
                  </p>
                </div>
                <div
                  className="pb-3"
                  style={{ lineHeight: 0.8, fontSize: "12px" }}
                >
                  <p className="fw-bold">خدمة الدفع عند الاستلام</p>
                  <p>خدمة الدفع عند الاستلام غير متوفرة حالياً.</p>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <p className="fw-bold">خدمة الاستلام من محلاتنا</p>

                  <p>
                    يمكنك الدفع عن طريق الموقع، لنقوم بتوصيل طلبيتك إلى المحل
                    الذي تختاره للاستلام. عندما تقوم بعمل طلبية سوف تستلم بريد
                    إلكتروني للتأكيد أو رسالة نصية تتضمن رقم الطلبية. سنقوم
                    بدورنا بإرسال بريد إلكتروني أو رسالة نصية لنخبركم بأن
                    الطلبية جاهزة للتسليم.
                  </p>

                  <p>
                    إذا لم تتمكن من استلام الطلبية لأي سبب، يرجى الإتصال على
                    الرقم 02-24803822
                  </p>

                  <p>
                    يرجى العلم بأننا لن نتمكن من قبول الطلبيات التي تتضمن منتجات
                    غير متوفرة، أو الطلبيات التي تحتوي على منتجات بخياري التوصيل
                    للمنزل والاستلام من محلاتنا معاً. في هذه الحالة يرجى القيام
                    بطلبيتين مختلفتين، طلبية بخدمة الاستلام من محلاتنا والأخرى
                    بخدمة التوصيل للمنزل.
                  </p>

                  <p>سنقوم بالاحتفاظ بالطلبية داخل المحل لمدة 14 أيام عمل.</p>

                  <p>
                    جميع الطلبيات التي لم تستلم سوف يتم إلغاءها، وأي عملية دفع
                    سابقة سنقوم بإعادة المبلغ للبطاقة الإئتمانية التي تم
                    استخدامها في عملية الدفع.
                  </p>

                  <p>للمزيد من المعلومات يرجى زيارة صفحة الأسئلة المتكررة.</p>
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
