import React from "react";
import "./Questions.css";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

export default function Questions() {
  const [lang, setLang] = useContext(langContext);
  return (
    <section className="questions py-5 px-4" dir="rtl">
      <h3 className="p-0 m-0">
        {" "}
        {lang == "ar"
          ? StringManager.questions.ar
          : StringManager.questions.en}{" "}
      </h3>
      <hr className="mt-2" />

      <div className="question">
        <h5 className="mt-3">
          {" "}
          {lang == "ar"
            ? StringManager.question1.ar
            : StringManager.question1.en}{" "}
        </h5>
        <p className="text-muted m-0 p-0">
          {lang == "ar"
            ? StringManager.question1Answer.ar
            : StringManager.question1Answer.en}
          <a href="/DeliveryInformation" className="text-decoration-none">
            {lang == "ar"
              ? StringManager.question1Link.ar
              : StringManager.question1Link.en}
          </a>
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question2.ar
            : StringManager.question2.en}
        </h5>
        <p className="text-muted m-0 p-0">
          {lang == "ar"
            ? StringManager.question2.ar
            : StringManager.question2.en}
          <a href="#" className="text-decoration-none">
            02-24803822
          </a>
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {" "}
          {lang == "ar"
            ? StringManager.question3.ar
            : StringManager.question3.en}
        </h5>
        <p className="text-muted m-0 p-0">
          {lang == "ar"
            ? StringManager.question3Answer.ar
            : StringManager.question3Answer.en}
        </p>
        <p className="text-muted mx-0 my-3 p-0">
          {lang == "ar"
            ? StringManager.question3Answer2.ar
            : StringManager.question3Answer2.en}
        </p>
      </div>

      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question4.ar
            : StringManager.question4.en}
        </h5>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question4Answer.ar
            : StringManager.question4Answer.en}
        </p>
        <ol className="py-0 px-3">
          <li>
            {lang == "ar"
              ? StringManager.question4Step1.ar
              : StringManager.question4Step1.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question4Step2.ar
              : StringManager.question4Step2.en}
          </li>
        </ol>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {" "}
          {lang == "ar"
            ? StringManager.question5.ar
            : StringManager.question5.en}{" "}
        </h5>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question5Answer.ar
            : StringManager.question5Answer.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question6.ar
            : StringManager.question6.en}
        </h5>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question6Answer.ar
            : StringManager.question6Answer.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-4">
          {lang == "ar"
            ? StringManager.question7.ar
            : StringManager.question7.en}{" "}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question7Answer.ar
            : StringManager.question7Answer.en}
        </p>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question7sub.ar
            : StringManager.question7sub.en}
          <a href="/ReturnExchange" className="text-decoration-none">
            {lang == "ar"
              ? StringManager.question7Link.ar
              : StringManager.question7Link.en}
          </a>
          .
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question8.ar
            : StringManager.question8.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question8Answer1.ar
            : StringManager.question8Answer1.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question8Answer2.ar
            : StringManager.question8Answer2.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question8Answer3.ar
            : StringManager.question8Answer3.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question9.ar
            : StringManager.question9.en}
        </h5>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question9Answer.ar
            : StringManager.question9Answer.en}
        </p>
        <ol className="py-0 px-3">
          <li>
            {lang == "ar"
              ? StringManager.question9Step1.ar
              : StringManager.question9Step1.en}
          </li>
          <li>
            {" "}
            {lang == "ar"
              ? StringManager.question9Step2.ar
              : StringManager.question9Step2.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question9Step3.ar
              : StringManager.question9Step3.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question9Step4.ar
              : StringManager.question9Step4.en}{" "}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question9Step5.ar
              : StringManager.question9Step5.en}
          </li>
        </ol>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question9Sub.ar
            : StringManager.question9Sub.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question10.ar
            : StringManager.question10.en}{" "}
        </h5>
        <p className="text-muted m-0 my-2 p-0">
          {lang == "ar"
            ? StringManager.question10Answer.ar
            : StringManager.question10Answer.en}
        </p>
        <ul className="py-0 px-3">
          <li>
            {lang == "ar"
              ? StringManager.question10Reason1.ar
              : StringManager.question10Reason1.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question10Reason2.ar
              : StringManager.question10Reason2.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question10Reason3.ar
              : StringManager.question10Reason3.en}{" "}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question10Reason4.ar
              : StringManager.question10Reason4.en}
          </li>
          <li>
            {lang == "ar"
              ? StringManager.question10Reason5.ar
              : StringManager.question10Reason5.en}
          </li>
        </ul>
      </div>

      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question11.ar
            : StringManager.question11.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question11Answer.ar
            : StringManager.question11Answer.en}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche1.ar
            : StringManager.question11Branche1.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche2.ar
            : StringManager.question11Branche2.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche3.ar
            : StringManager.question11Branche3.en}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche4.ar
            : StringManager.question11Branche4.en}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche5.ar
            : StringManager.question11Branche5.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche6.ar
            : StringManager.question11Branche6.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche7.ar
            : StringManager.question11Branche7.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche8.ar
            : StringManager.question11Branche8.en}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche9.ar
            : StringManager.question11Branche9.en}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche10.ar
            : StringManager.question11Branche10.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche11.ar
            : StringManager.question11Branche11.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche12.ar
            : StringManager.question11Branche12.en}{" "}
        </p>
        <p className="px-0 py-2 m-0">
          {lang == "ar"
            ? StringManager.question11Branche13.ar
            : StringManager.question11Branche13.en}{" "}
        </p>
      </div>

      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question12.ar
            : StringManager.question12.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question12Answer.ar
            : StringManager.question12Answer.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question12Answer2.ar
            : StringManager.question12Answer2.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question13.ar
            : StringManager.question13.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question13Answer.ar
            : StringManager.question13Answer.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question13Answer2.ar
            : StringManager.question13Answer2.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question14.ar
            : StringManager.question14.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question14Answer.ar
            : StringManager.question14Answer.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question15.ar
            : StringManager.question15.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question15Answer.ar
            : StringManager.question15Answer.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question15Answer2.ar
            : StringManager.question15Answer2.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question16.ar
            : StringManager.question16.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question16Answer1.ar
            : StringManager.question16Answer1.en}
          <a href="login" className="text-decoration-none">
            {lang == "ar"
              ? StringManager.question16Link.ar
              : StringManager.question16Link.en}
          </a>
          {lang == "ar"
            ? StringManager.question16Answer2.ar
            : StringManager.question16Answer2.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {lang == "ar"
            ? StringManager.question16Answer3.ar
            : StringManager.question16Answer3.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          <a href="#" className="text-decoration-none">
            02-24803822
          </a>
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">
          {lang == "ar"
            ? StringManager.question17.ar
            : StringManager.question17.en}
        </h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {" "}
          {lang == "ar"
            ? StringManager.question17Answer.ar
            : StringManager.question17Answer.en}
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          {" "}
          {lang == "ar"
            ? StringManager.question17Answer2.ar
            : StringManager.question17Answer2.en}
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">كيف أستطيع تحديث بياناتي الشخصية؟</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          لتحديث أو تغيير بياناتك الشخصية نرجو منك الدخول على (اتش آند ام
          الكويت) باستخدام رابط "تسجيل الدخول أو التسجيل" في أعلى الصفحة. وإذا
          كنت قد سجلت دخول مسبقاً، يرجى الضغط على "حسابي" في أعلي الصفحة ثم اختر
          "تفاصيل الدخول والاتصال المفضلة" ومن هنا بإمكانك مشاهدة وتعديل كلمة
          السر، والعناوين، وقائمة الأمنيات، ومعلومات الاتصال وكيف تريد منا أن
          نتصل بك.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">رابط العثور على المحل</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">البحث عن المحلات</p>
      </div>
      <div className="question">
        <h5 className="mt-3">رابط دليل المقاسات</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">دليل المقاسات</p>
      </div>
      <div className="question">
        <h5 className="mt-3">العناية بالقماش - إرشادات الغسيل</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          إن معرفة كيفية غسل القماش ليس من شأنه إطالة عمر استخدامه وحسب، وإنما
          يساعد في تقليل تأثره بالعوامل البيئية والمحافظة على الموارد الطبيعة
          المنسوج منها أيضاً. سوف تساعدكم التعليمات الواردة بالملصق في التعرف
          على تعليمات الغسيل وكيفية توفير العناية المثالية للقماش، وإليكم هنا
          بعض النصائح الهامة:
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الصوف الخشن</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ينبغي تجفيف الملابس المنسوجة من الصوف الخشن بشكلٍ مسطح للحفاظ على
          مظهرها الأصلي، ولهذا السبب ستجدون أن هذه الملابس تأتي مع ملصق خاص ينصح
          بالتجفيف بشكلٍ مسطح.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الكتان</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يعتبر نسيج الكتان من الأنسجة الطبيعية التي تتجعد أو تنكمش بسهولة عندما
          تكون مبللة. لاستعادة شكل النسيج الأصلي والحفاظ على لمعانه، يجب كيه
          بالبخار الساخن على الوجه الآخر (الداخلي) للقطعة.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الفيسكوز</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يعتبر الفيسكوز من الأنسجة الصناعية المصنوعة من السليولوز التي تتجعد أو
          تنكمش بسهولة عندما تكون مبللة. لاستعادة مظهر النسيج الأصلي، يجب كيه
          بالبخار الساخن.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الحرير</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يعتبر الحرير من الأنسجة شديدة النعومة التي يجب التعامل معها بعناية.
          يُفضل استخدام نوعية خاصة من المنظفات عند تنظيف الحرير، مع تجنب شد
          النسيج بقوة عندما يكون مبلل.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الصوف الطبيعي</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          غالباً ما يكون وضع المنتجات المنسوجة من الصوف الطبيعي في الهواء الطلق
          كافياً، ويُفضل استخدام نوعية خاصة من المنظفات عند التنظيف. يٌمكن
          التنظيف في الغسالة (دورة غسل الصوف) أو يدوياً. يتم كي القماش بعد
          الغسيل لاستعادة لمعانه ومظهره الطبيعي.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الدنيم</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يتم غسل الملابس الجينز من خلال قلبها على الوجه الآخر (الداخلي) للحد من
          تلاشي الألوان. ويتم إخراجها على الفور من الغسالة لتجنب التجعيدات. وبما
          أن الدنيم مصبوغ بأصباغ خاصة، فقد تبقى هذه الأصباغ عالقة بعض جزيئات
          الصبغ الصغيرة على السطح، والتي يمكنكم فركها للتخلص منها.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الجلد والشامواه</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ينصح بغسل الجلود عن طريق مختصين في غسل الجلود والأقمشة المنسوجة من
          الجلد والشامواه. اتبع إرشادات العناية.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يرجي استخدام ملمع الأحذية أو الرذاذ المقاوم للماء مع الأحذية والحقائب
          المصنوعة من الجلد. سوف يساعد ذلك في حمايتها من الماء، والحفاظ عليها
          لفترةٍ أطول.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          لا تستخدم الملمع، واستخدم فقط الرذاذ المقاوم للماء مع المنتجات
          المصنوعة من الشامواه أو النوبوك. كما يُنصح بعدم ارتداء حذائك أو حقيبتك
          المنسوجة منهما عندما يكون الجو ممطراً، فقد يتسبب ذلك في ظهور البقع،
          وتغير لون الصبغة وانتقالها لملابسك بسهولة. يرجي وضع الحذاء داخل القالب
          للحفاظ على مظهره، واستخدام عصا تسهيل الارتداء لحمايته من الخلف وعند
          الكعب. يرجي حل أربطة الحذاء والإبزيم بعناية عند الخلع ووضعهم في
          الداخل.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">الجاكيتات المنفوخة</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ضع كرات التنس في آلة تجفيف الملابس عند تجفيف الجاكيتات المنفوخة
          (المحشوة بالزغب والريش وغيرها)، وذلك لتوزيع الحشو بشكلٍ متساوٍ. كما
          يجب أن يتم تجفيفها بشكلٍ كامل.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">معطف المطر</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ينصح بتجفيف معطف المطر عن طريق تعليقه. ولكن إن كنت ترغب في تجفيفه في
          آلة التجفيف، فينصح بأن تتم العملية على درجة حرارة منخفضة. يرجى اتباع
          إرشادات العناية.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">التفاصيل الملحقة بالملابس</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          انزع التفاصيل الملحقة القابلة للإزالة، وارفع السحابات واللاصقات
          الفيلكرو قبل الغسيل. اغسل الكلونات النايلون والملابس الرقيقة مع هذه
          الأجزاء الملحقة في حقيبة غسيل.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">العناية بالملابس – الغسيل الصحيح:</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          إن عملية غسل وتجفيف وكي ملابسك تشكل ما نسبته 36% من إجمالي التأثير
          البيئي على القماش خلال فترة استخدامه، وباختيارات أكثر ذكاءً ووعياً
          يمكن تقليل هذه النسبة إلى أكثر من النصف.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يمكنك أن تساعد بيئتك وملابسك من خلال تقليل تكرار عملية غسل الملابس
          والخفض من درجة حرارة عملية الغسيل، والتقليل من استخدام عملية الكي
          وتجنب التجفيف الآلي للملابس.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          إن اختيار أساليب أكثر ذكاءً يمكن أن يساعد في إطالة عمر ملابسك المفضلة،
          بالإضافة إلى تقليل التأثير البيئي والحفاظ على ملابسك نظيفة.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">لا داعي لغسل الملابس غير المتسخة</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          لا داعي لغسل الملابس غير المتسخة، وبدلاً من ذلك يمكن تهويتها وتنظيفها
          باستخدام الفرشاة.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">خفض درجة حرارة عملية الغسيل</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          تضع اتش آند ام عادةً ملصقات على الملابس للغسيل بأقصى درجة حرارة مسموح
          بها، ولكن يمكنك خفض درجة الحرارة لتوفير الطاقة.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          كما أن أغلب مواد التنظيف تعمل بشكلٍ ممتاز عند درجات حرارة أقل، وللعلم
          فإن غسل الملابس على درجة حرارة 40 مئوية يستهلك نصف الطاقة التي يتم
          استهلاكها على درجة حرارة 60 مئوية.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ودائماً ما تنصح اتش آند ام زبائنها بغسل الملابس المتسخة بشدة والملابس
          الداخلية عند أعلى درجة حرارة مسموح بها.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          يرجى عدم غسل الملابس على درجة حرارة أعلى مما هو مذكور في إرشادات
          العناية.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">املئ غسالتك</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          قم بفرز الملابس بحسب اللون ودرجة الحرارة المسموح بها عند الغسيل، املئ
          غسالتك ولكن لا تقم بتكديس الملابس.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          تعد غسالة الملابس ممتلئة في حال كان بإمكانك وضع قبضتك بشكل مغلق عند
          سطح الملابس دون ضغطها.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ينصح باستخدام نظام توفير الطاقة عند الغسيل – أغلب الغسالات الحديثة
          تحتوي على نظام مماثل.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">قم باختيار مواد تنظيف صديقة للبيئة</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          تنصح اتش آند ام باستخدام منظفات صديقة للبيئة خالية من المبيضات البصرية
          والفوسفات، وذلك لأن لها تأثير سلبي على البيئة عند إطلاقها في الهواء.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          قم باستخدام كميات مسحوق التنظيف بحسب ما هو موصى به ومذكور على العلبة،
          بحيث أن زيادة كمية مسحوق التنظيف لن يزيد من نظافة الملابس.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ولمعرفة المزيد عن الكمية المناسبة اللازم استخدامها، يجب أن تعرف فيما
          إذا كانت المياه التي لديك عسرة أم نقية.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          تجنب استخدام منعمات الأنسجة، ومع ذلك فإن اتش آند ام تنصح بغسل الأنسجة
          المصنوعة من الأكريليك مع مواد تنعيم الأنسجة لعدم خلق كهرباء ساكنة في
          الأقمشة بعد غسلها.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">تجنب التنظيف الجاف – Dry Cleaning</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          إن عملية التنظيف الجاف هي عبارة عن غسل الملابس باستخدام المذيبات
          العضوية وهو ذو تأثير سلبي على البيئة حيث أن تنبعث الأوساخ المراد
          التخلص منها في الهواء.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          وتحتاج مجموعة صغيرة فقط من أقمشة اتش آند ام إلى غسلها بطريقة التنظيف
          الجاف، وذلك لأنها تحتوي على تفاصيل ومواد قد تتسبب في تغير اللون أو
          تغير في الشكل عند غسلها في المنزل.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          أما اليوم، فهناك وسائل تنظيف غسيل جاف صديقة للبيئة تقوم بتنظيف الملابس
          باستخدام ثاني أكسيد الكربون الذي يتم استصلاحه من المصانع، وهذا النوع
          من التنظيف الجاف لا يصدر عنه مواد كيميائية.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">أترك ملابسك لتجف في الهواء</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          ينصح بترك الملابس لتجف بشكل طبيعي في الهواء، وذلك أن النشافات تستهلك
          الكثير من الطاقة.
        </p>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          وللتقليل من وقت التجفيف، فإن دورة لطيفة للملابس قبل إخراجهم من الغسالة
          ستفي بالغرض.
        </p>
      </div>
      <div className="question">
        <h5 className="mt-3">التبرع بالملابس القديمة!</h5>
        <p className="text-muted m-0 mt-2 mb-3 p-0">
          إن كان لديك ملابس قديمة ولم ترتديها منذ فترة طويلة، ما عليك سوى التبرع
          بها للمنظمات والهيئات التي تهتم بإعادة تدوير الملابس مرة أخرى.
        </p>
      </div>
    </section>
  );
}
