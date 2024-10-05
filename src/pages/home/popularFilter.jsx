import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
/* import SliderProducts from "../../slider";
 */
export default function PopularFilter() {
  return (
    <>
      <div className="popular-filter">
        <div>
          <h2 className="popular-filter-heading">الرائج الآن</h2>
        </div>
        <div>
          <button className="popular-buttons">النساء</button>
          <button className="popular-buttons">الرجال</button>
          <button className="popular-buttons">الأطفال</button>
          <button className="popular-buttons">الرضع</button>
          <button className="popular-buttons">هوم</button>
          <button className="popular-buttons">الملابس الرياضية</button>
          <button className="popular-buttons">التنزيلات</button>
        </div>
      </div>

      <div>{/*    <SliderProducts /> */}</div>
    </>
  );
}
