import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us py-5" dir="rtl">
      <Container>
        <div className="main text-center">
          <h1>مجموعة اتش آند ام</h1>
          <p className="py-3 px-3 px-md-5">
            تعد مجموعة اتش آند ام واحدة من شركات الأزياء الرائدة في العالم –
            وبالإضافة إلى اتش آند ام، تضم المجموعة علامات أذر ستوريز، وكوس،
            وCheap Monday، وMonki، وWeekday، واتش آند ام هوم. وتتميز جميع منتجات
            اتش آند ام بكونها متفردة بهويتها ومتحدة بشغفها وتطلعها لعالم الأزياء
            والموضة، ودائماً ما تسعى إلى ضمان جودة منتجاتها وتقديمها بطريقة
            مستدامة لزبائنها.
          </p>
        </div>
        <hr className="m-auto" style={{ width: "200px" }} />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>الأزياء التي يحبها الجميع</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                بدأ كل شيء مع متجر واحد لبيع الملابس النسائية في مدينة فيستيروس،
                السويد، في عام 1947. أما اليوم، فإن مجموعة اتش آند ام لديها
                العديد من العلامات التجارية الخاصة بالأزياء وتتميز بحضور وتواجد
                عالمي قوي. وقد توسعنا على المدى الطويل من خلال مواقعنا على
                الانترنت ومتاجرنا الجديدة في الأسواق في كل مكان. مهمتنا هي توفير
                أزياء ذات جودة عالية في متناول أكبر عدد ممكن من الناس.
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>كيف نقوم بمهمتنا</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                نسعى دوماً لتقديم أفضل الأزياء المستدامة لزبائننا، كما أن التزام
                موظفينا هو عامل أساسي من نجاحنا. ولتحقيق النجاح فإننا نحرص دوماً
                على خلق مستقبل أفضل للأزياء، ونقوم باستغلال قدراتنا في السوق
                لتنمية بيئة صناعة أزياء مثالية حول العالم.
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
              <h2>من نحن</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                تضم مجموعة اتش آند ام أكثر من 161,000 موظف من جنسيات وخلفيات
                مختلفة حول العالم حريصون أشد الحرص على خلق أفضل العروض وأفضل
                تجارب التسوق للزبائن. جميعنا في اتش آند ام نتشارك في طريقة عمل
                تستند على القيم، ومبنية على احترام الزبون بشكل أساسي. وتشتمل
                قيمنا التي نتشاركها على المساعدة في خلق ثقافة شركة مفتوحة
                وديناميكية ومتاحة ومتوفرة للجميع.
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>إحصائيات مهمة</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                <ul className="text-end">
                  <li>
                    لقد قامت مجموعة اتش آند ام بتوظيف 13,000 موظف جديد في عام
                    2016، لنصل بذلك إلى فريق عمل يتكون من 161,000 موظف.
                  </li>
                  <li>
                    بلغت مبيعات مجموعة اتش آند ام بما في ذلك ضريبة القيمة
                    المضافة 223 مليار كرونة سويدية في عام 2016.
                  </li>
                  <li>
                    لدينا 43 سوق على الانترنت وأكثر من 4500 متجر في 69 سوق.
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
              <h2>هل تعلم</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                <ul className="text-end">
                  <li>
                    أن 96% من الكهرباء التي استخدمناها في عام 2016 قادمة من
                    مصادر متجددة.
                  </li>
                  <li>
                    أننا قمنا بالتقليل من الغازات المنبعثة بنسبة 47% في عام
                    2016.
                  </li>
                  <li>
                    أننا ساعدنا بخلق حوالي 1.6 مليون فرصة وظيفية للأشخاص
                    العاملين لدى موردينا في قطاع صناعة النسيج.
                  </li>
                  <li>
                    أن متاجرنا قامت بجمع أكثر من 55,000 طن من الملابس منذ عام
                    2013، وذلك لإعادة استخدامها وإعادة تدويرها.
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
