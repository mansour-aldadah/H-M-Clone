import { Col, Container, Row } from "react-bootstrap";
import "./WeeklyGiftCardsPage.css";
import cards from "../../assets/WeeklyGiftCardsPageImages/Group 7 2_0.webp";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function WeeklyGiftCardsPage() {
  const [activeKey, setActiveKey] = useState(null);

  // Toggle the active state
  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <section className="main p-0" dir="rtl">
      <Container className="p-0 p-lg-5 text-center text-md-end">
        <Row className="first d-none d-md-flex mx-auto p-5 w-100 m-5">
          <Col md="6">
            <img src={cards} alt="cards" style={{ width: "100%" }} />
          </Col>
          <Col md="6">
            <h3 className="fw-bold">
              بطاقات الهدايا الإلكترونية من اتش آند ام
            </h3>
            <p className="fw-bold">
              دع أحباءك يستمتعون بحرية الاختيار مع بطاقة الهدايا الإلكترونية -
              الهدية المثالية لجميع المناسبات.
            </p>
            <Row>
              <Col md="6">
                <button className="btn btn-dark buy w-100 rounded-0 fw-bold p-3">
                  شراء بطاقة الهدايا
                </button>
              </Col>
              <Col md="6">
                <button className="btn btn-outline-dark buy w-100 rounded-0 fw-bold p-3">
                  ربط الحساب
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="first d-block d-md-none m-0 p-4 w-100">
          <Col md="6" className="p-0">
            <h2>بطاقات الهدايا الإلكترونية من اتش آند ام</h2>
            <p>
              دع أحباءك يستمتعون بحرية الاختيار مع بطاقة الهدايا الإلكترونية -
              الهدية المثالية لجميع المناسبات.
            </p>
            <img src={cards} alt="cards" style={{ width: "100%" }} />

            <button className="btn btn-dark buy w-100 rounded-0 fw-bold p-3 my-2">
              شراء بطاقة الهدايا
            </button>

            <button className="btn btn-outline-dark buy w-100 rounded-0 fw-bold p-3 my-2">
              ربط الحساب
            </button>
          </Col>
        </Row>
        <Row className="p-0 m-0 mb-3">
          <Col md="6" className="text-center px-4 px-sm-0">
            <Card className="border-0 my-3 my-md-0 rounded-0 ms-md-3">
              <Card.Body>
                <Card.Title>تحقق من رصيد البطاقة</Card.Title>
                <Card.Text className="mb-5">
                  قم بإعادة تعبئة بطاقة الهدايا الإلكترونية الخاص بك لاستخدامها
                  في عمليات الشراء
                </Card.Text>
                <button className="btn btn-outline-dark buy buy2 rounded-0 fw-bold p-3 px-5 my-2">
                  تحقق من الرصيد
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" className="text-center px-4 px-sm-0">
            <Card className="border-0 my-3 my-md-0 rounded-0 me-md-3">
              <Card.Body>
                <Card.Title>تعبئة البطاقة</Card.Title>
                <Card.Text className="mb-5">
                  يمكنك تعبئة البطاقة عبر اختيار أحد الخيارات المتوفرة مسبقاً أو
                  إدخال مبلغ مخصص
                </Card.Text>
                <button className="btn btn-outline-dark buy buy2 rounded-0 fw-bold p-3 px-5 my-2">
                  تعبئة البطاقة
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="desc mb-5 px-4">
          <h5 className="my-4">أفضل الهدايا بضغطة واحدة!</h5>
          <p className="my-4">
            إن تقديم الهدايا إلى شخص ما هو الوسيلة الأمثل للتعبير عن مدى تقديرنا
            له. إذ أنه ينعكس على كل من مُقدّم الهدية ومتلقيها كطريقة مميزة
            لتعزيز علاقتهم الفريدة. أو بعبارة أخرى، الهدية تقدم بوصفها رمزاً أو
            وسيلة للتعبير عن الحب والمشاعر التي نكنها لأشخاص يحتلون في قلوبنا
            مكانة عظيمة، بغض النظر عن وقت أو مناسبة تقديمها.
          </p>
          <p className="my-4">
            قد يمثّل اختيار الهدية الأفضل تحدياً بالنسبة للبعض، لذا وفرنا لكم
            طريقة سهلة لإهداء أحبائكم الهدايا التي يعشقونها.
          </p>
          <p className="my-4">
            إليكم بطاقة الهدايا الإلكترونية من إتش أند إم المتوفرة حصرياً
            أونلاين والتي تعتبر من أفضل الوسائل لكي تعبّروا لأحبائكم عن مدى
            انتباهكم ورغبتكم في تلبية احتياجاتهم. إن هذه البطاقة هي بالضبط ما
            تبحثون عنه كهدية، فهي مُبهرة وتلائم جميع المناسبات. إذ أنها تتيح
            للأصدقاء والعائلة تسوق جميع مستلزماتهم من إتش أند إم عبر الموقع
            الإلكتروني. كما أنها تراعي احتياجات أحبائك وتضمن لهم متعة وراحة
            التسوق في أيّ وقت ومكان، فضلاً عن إمكانية الانتظار للاستفادة من
            التنزيلات الموسمية لتسوق جميع منتجاتنا مثل الفساتين، والبلوزات،
            والتيشيرتات، والقمصان، وملابس السباحة، والأحذية، ومنتجات التجميل،
            والإكسسوارات ومنتجات المنزل وغيرها كثير.
          </p>
          <p className="my-4">
            يمكنكم تسوق جميع احتياجاتكم من علاماتنا التجارية من الملابس،
            باستخدام بطاقة واحدة. سواء أكانت المناسبة حفل زفاف، أو عيد ميلاد أو
            ذكرى سنوية أو حتى بدون مناسبة، يمكنكم استخدام بطاقة الهدايا
            الإلكترونية كعذر لتغمروا أحبائكم بالهدايا.
          </p>
          <h5 className="my-4">لذا اطمئنوا وقدّموها لأحبائكم بثقة!</h5>
        </div>
        <hr className="my-5 px-4" />

        <div className="accordion px-4 px-md-0">
          <h3 className="text-center mb-4 py-3">
            الشروط والأحكام لبطاقات الهدايا الإلكترونية
          </h3>
          <Accordion
            activeKey={activeKey}
            className="rounded-0 border-0 text-end"
          >
            <Accordion.Item eventKey="0" className="rounded-0 border-0 mb-3">
              <Accordion.Header
                className="w-100"
                onClick={() => handleToggle("0")}
              >
                <span>الشروط العامة</span>
                <span className="icon">
                  {activeKey === "0" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  تسري هذه الشروط والأحكام على بطاقات هدايا اتش آند ام التي تم
                  شرائها عبر مواقعنا الإلكترونية. إن شراؤك لبطاقات هدايا اتش آند
                  ام الإلكترونية يعني موافقتك على هذه الشروط والإحكام ("الشروط
                  والأحكام").
                </p>
                <p className="p-0 m-0">
                  تحتفظ اتش آند ام بالحق في تفسير أو تعديل أو إنهاء هذه الشروط
                  والإحكام بدون إشعار مسبق. سوف يتم دائماً نشر آخر تحديثات
                  الشروط والأحكام عبر موقعنا الإلكتروني. إن بطاقة هدايا اتش آند
                  الإلكترونية قابلة للاستخدام عبر الموقع الإلكتروني.
                </p>
                <p className="p-0 m-0">
                  يمكنك استخدام البطاقة في دفع القيمة الكاملة أو جزء من قيمة
                  المنتجات المختارة. إذا لم تغطي بطاقة هدايا اتش آند ام
                  الإلكترونية القيمة الكاملة لعملية الشراء عبر الموقع، فيمكنك
                  استخدام وسيلة دفع إضافية لإتمام عملية الشراء. يرجى قراءة
                  المزيد في قسم الدفع.
                </p>
                <p className="p-0 m-0">
                  ستتيح الفاتورة دائماً معرفة الرصيد الحالي لبطاقة الهدايا
                  الإلكترونية المستخدمة في إتمام عملية الشراء. ليس ذلك فحسب، بل
                  يمكنك التحقق من الرصيد عبر الموقع أو في أيّ من محلات اتش آند
                  ام أو من خلال التواصل مع{" "}
                  <a href="#" className="fw-bold">
                    {" "}
                    خدمة الزبائن.
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("1")}>
                <span>الدفع والتسليم</span>
                <span className="icon">
                  {activeKey === "1" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  إذا قمت بطلب بطاقة هدايا اتش آند ام الإلكترونية عبر الموقع
                  الإلكتروني، فسيتم إرسالها إلى عنوان البريد الإلكتروني للمستلم
                  المختار بعد إتمام عملية الشراء.
                </p>
                <p className="p-0 m-0">
                  لذا يجب عليك إدخال عنوان بريد إلكتروني صحيح للاستلام. إذا تعذر
                  تأكيد عنوان البريد الإلكتروني المستخدم، فإن اتش آند ام تحتفظ
                  بالحق في منع تسليم بطاقات اتش آند ام الإلكترونية.
                </p>
                <p className="p-0 m-0">
                  علماً بأن بطاقة السحب الآلي/ البطاقة الائتمانية سوف تظهر شراؤك
                  لبطاقة هدايا اتش آند ام الإلكترونية.
                </p>
                <p className="p-0 m-0">
                  نقبل الدفع ببطاقات السحب الآلي/ البطاقات الائتمانية عند شراء
                  بطاقة هدايا اتش آند ام الإلكترونية.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("2")}>
                <span>الصلاحية</span>
                <span className="icon">
                  {activeKey === "2" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  تبلغ قيمة الحد الأقصى لعملية شراء بطاقات هدايا اتش آند ام
                  الإلكترونية عبر موقعنا 50.000 ج.م فقط. فيما تبلغ قيمة الحد
                  الأدنى 250 ج.م. نوفر خيارات متعددة القيمة لكي يتسنى لك
                  الاختيار منها أو تخصيص المبلغ الذي يلائمك بدلاً من ذلك.
                </p>
                <p className="p-0 m-0">
                  إن بطاقات هدايا اتش آند ام الإلكترونية سارية لمدة عام واحد من
                  تاريخ آخر تفعيل أو عملية الشراء.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("3")}>
                <span>مسئولية محدودة</span>
                <span className="icon">
                  {activeKey === "3" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  بمجرد تفعيل بطاقات هدايا اتش آند الإلكترونية، لن تتحمل اتش آند
                  ام أيّ مسؤولية في حال الفقدان، السرقة، التعطّل أو التلف. تعامل
                  مع بطاقة الهدايا الإلكترونية كتعاملك مع السيولة النقدية.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("4")}>
                <span>سياسة الخصوصية</span>
                <span className="icon">
                  {activeKey === "4" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  يمكنك استخدام بطاقة الهدايا الإلكترونية من اتش آند ام في أي من
                  محلاتنا من خلال إظهار رمز الاستجابة السريعة (QR) الخاص بك عند
                  الكاشير. بإمكانك الوصول إليها من خلال بريدك الإلكتروني أو عن
                  طريق تسجيل الدخول إلى حسابك من خلال مواقعنا أو تطبيقنا.
                </p>
                <p className="p-0 m-0">
                  لا يُمكن استخدام بطاقة الهدايا الإلكترونية لزيادة رصيد أو شراء
                  بطاقة هدايا إلكترونية أخرى.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="rounded-0 border-0 mb-3">
              <Accordion.Header onClick={() => handleToggle("5")}>
                <span>خدمة الزبائن</span>
                <span className="icon">
                  {activeKey === "5" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </Accordion.Header>
              <Accordion.Body className="p-5 pt-2 pb-5">
                <p className="p-0 m-0">
                  يمكنك دائماً التواصل مع فريق خدمة الزبائن من خلال صفحة اتصل
                  بنا من{" "}
                  <a href="#" className="fw-bold">
                    هنا.
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="list">
          <ul className="p-4 pb-0 fw-500">
            <li className="py-2">
              أين يمكن استخدامها ؟ بطاقة هدايا اتش آند ام الإلكترونية قابلة
              للاستخدام عبر الموقع الإلكتروني.
            </li>
            <li className="py-2">
              يمكنك استخدام البطاقة في دفع القيمة الكاملة أو جزء من قيمة
              المنتجات المختارة.
            </li>
            <li className="py-2">
              سيتم اقتطاع المبلغ المراد من البطاقة وسيظهر المبلغ المتبقي في
              الفاتورة.
            </li>
          </ul>
        </div>
        <div className="link fw-500">
          <p className="p-0">هنا</p>
          <p className="p-0">
            - تعرف على سياسة الخصوصية من{" "}
            <a href="#" className="fw-bold text-decoration-none">
              هنا
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
