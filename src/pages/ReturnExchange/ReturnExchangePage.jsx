import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import step1M from "../../assets/ReturnExchangeImages/imag1mobile.jpg";
import step2M from "../../assets/ReturnExchangeImages/image2mobile.jpg";
import step3M from "../../assets/ReturnExchangeImages/image3mobile.jpg";
import step4M from "../../assets/ReturnExchangeImages/image4mobile.jpg";
import step5M from "../../assets/ReturnExchangeImages/image5mobile.jpg";
import step6M from "../../assets/ReturnExchangeImages/image6mobile.jpg";
import step1B from "../../assets/ReturnExchangeImages/image1Browser.jpg";
import step2B from "../../assets/ReturnExchangeImages/image2Browser.jpg";
import step3B from "../../assets/ReturnExchangeImages/image3Browser.jpg";
import step4B from "../../assets/ReturnExchangeImages/image4Browser.jpg";
import step5B from "../../assets/ReturnExchangeImages/image5Browser.jpg";
import step6B from "../../assets/ReturnExchangeImages/image6Browser.jpg";
import { useState, useEffect } from "react";
import "./ReturnExchangeStyle.css";

function ReturnExchange() {
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
      <div className="returnExchange col-lg-10 col-md-12">
        <Row>
          <Col>
            <div className="Page-title">
              <div className="heading ">
                <h2> الإرجاع والاستبدال</h2>
              </div>
              <div className="line "></div>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <div>
              <p className="fw-bold">
                <ins>روابط سريعة </ins>
              </p>
              <ul className="p-0 m-0 " style={{ listStyle: "none" }}>
                <li>
                  <a href="#return-process">
                    عملية الإرجاع للطلبيات المشتراة أونلاين
                  </a>
                </li>
                <li>
                  <a href="#return-ws">الاسترجاع من خلال الموقع</a>
                </li>
                <li>
                  <a href="#polices">السياسات</a>
                </li>
                <li>
                  <a href="#e-gift">بطاقة الهدايا الإلكترونية</a>
                </li>
                <li>
                  <a href="#money-return">رد الأموال</a>
                </li>
                <li>
                  <a href="#cancelation">الإلغاء</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col>
            <div id="return-process">
              <p className="fw-bold link-underline-dark">
                <ins> عملية الإرجاع للطلبيات المشتراة أونلاين</ins>
              </p>
              <p>
                إذا رغبت بإرجاع طلبك مقابل استرداد المبلغ المدفوع أو استبداله
                بمنتجات معينة فإنه لديك مهله 14 يوم من تاريخ الفاتورة لعمل ذلك.
              </p>
              <p>تتطلب عملية الإرجاع هذه توافر شرطان أساسيان:</p>
              <p>
                <ol style={{ padding: "12px" }}>
                  <li>
                    إرجاع المنتج إلى المحل بنفس الحالة التي تم توصيله بها
                    وبغلافه الأصلي
                  </li>
                  <li> إحضار الفاتورة الخاصة بالمنتج</li>
                </ol>
              </p>
              <p>
                في حال توصيل منتج خطأ، أو تالف، أو غير مطابق لطلبك، فسيتم رد
                قيمة سعر شراء المنتج. وفي جميع الحالات عليك إرجاع المنتجات
                الخاطئة أو المتضررة أو غير الصحيحة إلينا في غضون 30 يوم في نفس
                صورتها الاصلية.
              </p>
              <p>
                يرجى العلم بأن المهلة الزمنية هي بحسب القوانين المعمول بها داخل
                بلدك وفي حالات العروض ستطبق الشروط الخاصة بالعروض.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col>
            <div id="return-ws">
              <p className="fw-bold link-underline-dark">
                <ins> ما هو الإرجاع عبر الموقع الإلكتروني؟</ins>
              </p>
              <p>
                يمكنك الآن إرجاع المنتجات التي اشتريتها عبر الموقع الإلكتروني
                بضغطة واحدة. يمكنك إتمام عملية الإرجاع في أيّ وقت عبر موقعنا
                الإلكتروني، حيث يمكنك اختيار منتج أو أكثر ترغب في إرجاعهم، وسيتم
                استلامهم ورد الأموال.
              </p>

              <div className="steps pt-4">
                <p className="fw-bold  fs-5">كيفية تقديم طلب الإرجاع؟</p>
                {isMobile ? (
                  <div className="steps-mobile" style={{ marginRight: "30px" }}>
                    <div className="step1">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          1
                        </div>
                        <p className="mt-3">
                          سجّل الدخول عبر إدخال اسم المستخدم وكلمة السر في صفحة{" "}
                          <b>"تسجيل الدخول"</b> .
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step1M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>

                    <div className="step2">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          2
                        </div>
                        <p className="mt-3">
                          انتقل إلى صفحة "حسابي", ومنها إلى قسم.{" "}
                          <b>" الطلبيات"</b> .
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step2M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>
                    <div className="step3">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          3
                        </div>
                        <p className="mt-3">
                          اضغط على زر{" "}
                          <b>"إرجاع المنتجات عبر الموقع الإلكتروني"</b>.
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step3M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>
                    <div className="step4">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          4
                        </div>
                        <p className="mt-3">
                          اختر المنتجات المطلوب إرجاعها، مع تحديد السبب والكمية.
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step4M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>
                    <div className="step5">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          5
                        </div>
                        <p className="mt-3">اختر طريقة الاسترداد </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step5M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>
                    <div className="step6">
                      <div className="step-content d-flex">
                        <div
                          className="fw-bold "
                          style={{ fontSize: "50px", marginLeft: "5px" }}
                        >
                          6
                        </div>
                        <p className="mt-3">
                          {" "}
                          قبل إجراء عملية الاستلام، يرجى قراءة التعليمات والضغط
                          على زر <b>"طباعة ملصق الإرجاع"</b> لطباعة ملصق التوصيل
                          وإرفاقه بالعبوة/ العبوات المسترجعة إلينا.
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="col-8"
                          src={step6M}
                          alt=""
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="steps-browser col-lg-8 m-auto">
                    <Row>
                      <div className="step1 d-flex align-items-center pb-5">
                        <Col lg={6}>
                          <div className=" step-content d-flex">
                            <div
                              className="fw-bold"
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              1
                            </div>
                            <p className="mt-3">
                              سجّل الدخول عبر إدخال اسم المستخدم وكلمة السر في
                              صفحة <b>"تسجيل الدخول"</b> .
                            </p>
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div>
                            <img
                              className="col-12"
                              src={step1B}
                              alt=""
                              style={{ marginRight: "20px" }}
                            />
                          </div>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <div className="step2 d-flex align-items-center pt-5 pb-5">
                        <Col lg={6}>
                          <div className="">
                            <img className="col-12" src={step2B} alt="" />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div
                            className="step-content d-flex"
                            style={{ marginRight: "30px" }}
                          >
                            <div
                              className="fw-bold "
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              2
                            </div>
                            <p className="mt-3">
                              انتقل إلى صفحة "حسابي", ومنها إلى قسم.{" "}
                              <b>" الطلبيات"</b> .
                            </p>
                          </div>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <div className="step3 d-flex align-items-center pt-5 pb-5">
                        <Col lg={6}>
                          <div className=" step-content d-flex">
                            <div
                              className="fw-bold"
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              3
                            </div>
                            <p className="mt-3">
                              اضغط على زر{" "}
                              <b>"إرجاع المنتجات عبر الموقع الإلكتروني"</b>.
                            </p>
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div>
                            <img
                              className="col-12"
                              src={step3B}
                              alt=""
                              style={{ marginRight: "20px" }}
                            />
                          </div>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <div className="step4 d-flex align-items-center pt-5 pb-5">
                        <Col lg={6}>
                          <div className="">
                            <img className="col-12" src={step4B} alt="" />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div
                            className="step-content d-flex"
                            style={{ marginRight: "30px" }}
                          >
                            <div
                              className="fw-bold "
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              4
                            </div>
                            <p className="mt-3">
                              اختر المنتجات المطلوب إرجاعها، مع تحديد السبب
                              والكمية.
                            </p>
                          </div>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <div className="step5 d-flex align-items-center pt-5 pb-5">
                        <Col lg={6}>
                          <div className=" step-content d-flex">
                            <div
                              className="fw-bold"
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              5
                            </div>
                            <p className="mt-3">اختر طريقة الاسترداد </p>
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div>
                            <img
                              className="col-12"
                              src={step5B}
                              alt=""
                              style={{ marginRight: "20px" }}
                            />
                          </div>
                        </Col>
                      </div>
                    </Row>

                    <Row>
                      <div className="step6 d-flex align-items-center pt-5 pb-5">
                        <Col lg={6}>
                          <div className="">
                            <img className="col-12" src={step6B} alt="" />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div
                            className="step-content d-flex"
                            style={{ marginRight: "30px" }}
                          >
                            <div
                              className="fw-bold "
                              style={{ fontSize: "50px", marginLeft: "5px" }}
                            >
                              6
                            </div>
                            <p className="mt-3">
                              {" "}
                              قبل إجراء عملية الاستلام، يرجى قراءة التعليمات
                              والضغط على زر <b>"طباعة ملصق الإرجاع"</b> لطباعة
                              ملصق التوصيل وإرفاقه بالعبوة/ العبوات المسترجعة
                              إلينا.
                            </p>
                          </div>
                        </Col>
                      </div>
                    </Row>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Accordion
              className="accordion-flush
            "
              defaultActiveKey="0"
            >
              <Accordion.Item
                eventKey="0"
                style={{ fontSize: "13px" }}
                className=""
              >
                <Accordion.Header>
                  كم المدة التي ستستغرقها عملية الإرجاع؟
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    بمجرد تقديم طلب الإرجاع عبر الموقع الإلكتروني، سيتم استكمال
                    عملية الإرجاع عبر 3 خطوات بسيطة.
                  </p>
                  <ul>
                    <li>
                      <b>الاستلام</b>: تستغرق عملية الاستلام حوالي 2-4 أيام عمل
                      لترتيب واستلام المنتجات المطلوب إرجاعها.
                    </li>
                    <li>
                      <b>المعالجة</b>: يرجى العلم أن مدة معالجة الطلب قد تستغرق
                      2-5 أيام لإجراء فحص الجودة وبدء عملية الاسترداد.
                    </li>
                    <li>
                      <b>رد المال</b>: قد يستغرق مصرفك أو جهة اصدار البطاقة 14
                      يوماً إضافياً لمعالجة عملية رد المال.
                    </li>
                  </ul>

                  <ul className="m-0 p-1">
                    <li>
                      بمجرد استلام طلب الإرجاع ومعالجة المنتج/ المنتجات، سيتم
                      طلب رد المال إلى حسابك البنكي أو بطاقتك الائتمانية بناء
                      على وسيلة الدفع الأصلية.
                    </li>
                    <li>
                      يرجى زيارة أيّ من محلاتنا للتمتع بخدمة الدفع نقداً عند
                      الاستلام أو خدمة استلم من المحل.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{ fontSize: "13px" }} eventKey="1">
                <Accordion.Header>ما يجب معرفته أيضاً؟</Accordion.Header>
                <Accordion.Body>
                  <p className="fw-bold p-0 mb-1" /* style={{ marginB: 0 }} */>
                    <ins>الطلب</ins>
                  </p>

                  <ul style={{ marginRight: "15px", padding: 0 }}>
                    <li>
                      لا يمكن تقديم طلبات الإرجاع عبر الموقع الإلكتروني إلا عبر
                      المستخدمين المسجلين.
                    </li>
                    <li>يمكن للمستخدم المسجل تقديم طلب واحد فقط لكل طلبية.</li>
                    <li>
                      لا يمكن للمستخدم الزائر تقديم طلب إرجاع عبر الموقع
                      الإلكتروني، لكن يمكنه دائماً التسجيل أو انشاء حساب
                      باستخدام نفس عنوان البريد الإلكتروني.
                    </li>
                    <li>
                      في حال غيّرت رأيك، يمكنك إلغاء طلب الإرجاع عبر الموقع
                      الإلكتروني قبل إغلاق نافذة الإرجاع.
                    </li>
                    <li>
                      لا يمكن تعديل طلبات الإرجاع عبر الموقع الإلكتروني، لذا يجب
                      إلغاء طلب الإرجاع الحالي وتقديم طلب جديد.
                    </li>
                    <li>
                      يمكنك إرجاع منتج/ منتجات الطلبية في غضون 14 يوماً من تاريخ
                      التوصيل.
                    </li>
                  </ul>
                  <p className="fw-bold p-0 mb-1">
                    <ins>المعالجة</ins>
                  </p>

                  <ul style={{ marginRight: "15px", padding: 0 }}>
                    <li>
                      ستقوم جهة التوصيل بترتيب عملية استلام المنتج/ المنتجات 3
                      مرات بحد أقصى. إذا لم يتم تسليم المنتج/ المنتجات إلى جهة
                      التوصيل، فسيتم إلغاء طلب الإرجاع.
                    </li>
                    <li>
                      يجب إعادة المنتج/ المنتجات بنفس حالتها الأصلية. إذا لم تعد
                      مواد التغليف الأصلية متوفرة، فيمكنك إعادة الطلبية باستخدام
                      أيّ مواد تغليف مناسبة.
                    </li>
                    <li>
                      إذا كان زر "إلغاء" الموجود في صفحة تفاصيل الطلبية غير
                      مُفعل، فهذا يعني أن المنتج/ المنتجات تمت معالجتها بالفعل.
                    </li>
                  </ul>

                  <p className="fw-bold p-0 mb-1">
                    <ins>السياسات</ins>
                  </p>
                  <ul style={{ marginRight: "15px", padding: 0 }}>
                    <li>
                      سيتم تحديد جميع المنتجات المشمولة بالتنزيلات تلقائياً عند
                      الإرجاع وبالتالي يجب إرجاعها إلى جهة التوصيل.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item style={{ fontSize: "15px" }} eventKey="2">
                <Accordion.Header> هل ما زلت تبحث عن الدعم؟</Accordion.Header>
                <Accordion.Body>
                  <p>
                    للتواصل معنا، يرجى الضغط{" "}
                    <a href="#" style={{ textDecoration: 0, color: "#222222" }}>
                      هنا
                    </a>
                    .
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="pt-5">
          <Col>
            <div id="polices" style={{ fontSize: "15px" }}>
              <p className="fw-bold p-0 mb-1">
                <ins>السياسات</ins>
              </p>
              <p>
                يمكن إرجاع المنتجات التي قمت بشرائها أونلاين من خلال موقعنا
                الإلكتروني أو إلى إحدى محلاتنا.
              </p>
              <p>
                يتم إرجاع المشتريات التي تم شراؤها عبر موقعنا من خلال محلاتنا
                فقط.
              </p>
              <p>
                أي مواد مهما كانت تم إعطاؤها مع المنتجات المشتراة مجاناً يجب
                إرجاعها أيضاً.
              </p>
              <p>
                يتوجب عليك التعامل بحرص مع أي منتجات ترغب بإرجاعها وبالإضافة الى
                عدم استخدامها يجب الحفاظ عليها في صورتها الاصلية . نحن لا نتحمل
                مسؤولية أي خسائر أو أضرار تقع للمنتجات أثناء تواجدها بحوزتك
                ويمكننا في هذه الحالة رفض طلبك للإرجاع.
              </p>

              <p>
                وفقاً لمعايير صناعة التجزئة العالمية، ليس بإمكاننا قبول عمليات
                إرجاع أو استبدال المنتجات التي تندرج تحت الفئات التالية: الملابس
                الداخلية، ،وملابس السباحة, والملابس الداخلية النسائية، والعطور،
                ومنتجات الصحة والجمال كمنتجات العناية بالبشرة والماكياج
                ومستحضرات التجميل أو أي منتجات أخرى تم تحضيرها بناءاً على طلبك.
              </p>
              <p>
                في حال توصيل منتج خطأ، أو تالف، أو غير مطابق لطلبك، فسيتم رد
                قيمة سعر شراء المنتج. وفي جميع الحالات عليك إرجاع المنتجات
                الخاطئة أو المتضررة أو غير الصحيحة إلينا بالسرعة الممكنة في نفس
                صورتها الاصلية.
              </p>
              <p>
                لا يمكن إرجاع أو ردّ قيمة المنتجات التي اشتريتها من محلاتنا أو
                أونلاين إلا في بلد الطلب. تنطبق هذه السياسة أيضاً على المنتجات
                التي تم شراؤها عبر طرف ثالث أو موزّع.
              </p>

              <p>
                الطلبيات التي يتم فيها الدفع عند الاستلام غير مؤهلة للإرجاع عبر
                الإنترنت.
              </p>

              <p>
                لمزيدٍ من التفاصيل حول سياسات الإرجاع لدينا، يرجى زيارة صفحة
                شروط وأحكام الشراء.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <div id="e-gift" style={{ fontSize: "15px" }}>
              <p className="fw-bold p-0 mb-1">
                <ins>بطاقة الهدايا الإلكترونية</ins>
              </p>

              <p>
                - أيّ منتجات يتم شراؤها عبر بطاقة الهدايا الإلكترونية سيتم
                إرجاعها عبر بطاقة الهدايا الإلكترونية
              </p>
              <p>
                - أيّ طلبيات يتم تسجيلها عبر خيارات دفع متعددة (مثل بطاقة
                الهدايا الإلكترونية + بطاقات الدفع) سيتم إرجاعها عبر وسيلة الدفع
                الأصلية
              </p>
              <p>
                - سيتم إرجاع المبالغ المدفوعة عبر بطاقة الهدايا الإلكترونية إلى
                بطاقة الهدايا وتحويل الرصيد المتبقي مباشرة إلى بطاقة الائتمان/
                السحب الآلي
              </p>
              <p>- مشتريات ورصيد بطاقة الهدايا الإلكترونية غير قابلة للإرجاع</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="money-return">
              <p className="fw-bold p-0 mb-1">
                <ins> رد الأموال</ins>
              </p>
              <p>
                مع مراعاة الاستثناءات الواردة أعلاه، عندما تقوم بإرجاع طلبك سوف
                نقوم بتنفيذ عملية إرجاع المال عند استلام المنتجات المرتجعة،
                باستثناء أي رسوم توصيل دفعتها.
              </p>
              <p>
                في حالة رغبة الزبون في استرداد قيمة الطلب من المحل، يمكن القيام
                بذلك بعد 48 ساعة (يومين) من استلام الطلبية.
              </p>
              <p>
                يتم استرداد قيمة المشتريات التي تمت عبر فوري من خلال زيارة
                المتاجر وإعادة القطع المراد إرجاعها.
              </p>
              <p>
                تنفذ أي عمليات رد مبالغ من قبلنا فيما يخص عمليات الإرجاع على
                النحو التالي.
              </p>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>أسلوب الدفع</th>
                    <th>بطاقة الائتمان</th>
                    <th>بطاقة السحب الآلي</th>
                    <th>الدفع نقداً عند الاستلام</th>
                    <th>بطاقة الهدايا الإلكترونية</th>
                    <th>فوري</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>طريقة الإرجاع</td>
                    <td>بطاقة الائتمان</td>
                    <td>بطاقة السحب الآلي</td>
                    <td>لا ينطبق</td>
                    <td>بطاقةالهدايا الإلكترونية</td>
                    <td> لا ينطبق</td>
                  </tr>
                </tbody>
              </Table>
              <p>
                عندما نشير إلى بطاقة الهدايا فنحن نقصد بطاقة الهدايا
                الإلكترونية/والتي يمكن استخدامها لاحقاً في عمليات الشراء في
                محلاتنا وأونلاين حيثما أمكن.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="cancelation" style={{ fontSize: "15px" }}>
              <p className="fw-bold p-0 mb-1">
                <ins> الإلغاء</ins>
              </p>
              <p>
                إذا رغبت في إلغاء طلبك، يمكنك القيام بذلك بالاتصال بقسم خدمة
                الزبائن لدينا على الرقم 24803822-02 خلال ساعات العمل وفي غضون
                ساعة من الطلب.
              </p>
              <p>
                إذا قمت بالدفع بواسطة بطاقة الائتمان أو اي بطاقة السحب الآلي،
                وقمت بإلغاء الطلب وفقاً لهذا البند سنقوم بعملية رد للمبلغ (اذا
                اقتضى الحال) وبالسرعة الممكنة إلا أننا غير مسؤولين عن المدة
                اللازمة لعودة ظهور تلك العملية في حسابك حيث انها تعتمد على
                إجراءات البنك الذي تستخدمه.
              </p>
              <p>
                يرجى العلم بأنه ليس بإمكاننا قبول عمليات إلغاء بعد الوقت المذكور
                اعلاه حيث أن الطلب يكون قد تم ولكن يمكن إلغاؤه بإتباع إرشادات
                عملية الارجاع / رد الأموال المتبعة لدينا حسبما ورد اعلاه.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReturnExchange;
