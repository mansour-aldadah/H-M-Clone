import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/shared/footer/footer";
/* import AllProducts from "./pages/AllProducts/AllProducts"; */
import HomePage from "./pages/home/homePage";

export default function App() {
  return (
    <>
      <HomePage />
      {/*  <AllProducts /> */}
      <Footer />
    </>
  );
}
