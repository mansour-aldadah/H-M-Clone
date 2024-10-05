import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/homePage";
import MainLayout from "./components/shared/mainLayout/mainLayout";
import NotFound from "./pages/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import DeliveryInformation from "./pages/DeliveryInformation/DeliveryInfo";
import Favourite from "./pages/favourite/Empty-fav";
import LightingPage from "./pages/LightingPage/LightingPage";
import LocationMain from "./pages/location/locationMain";
import Login from "./pages/loginpage/login";
import Register from "./pages/loginpage/register";
import ForgetPassword from "./pages/loginpage/forgetpassword";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import PurchaseTerms from "./pages/PurchaseTerms/PurchaseTerms";
import Questions from "./pages/Questions/Questions";
import Terms from "./pages/Terms/Terms";
import WebsiteMap from "./pages/WebsiteMap/WebsiteMap";
import WeeklyGiftCardsPage from "./pages/WeeklyGiftCardsPage/WeeklyGiftCardsPage";
import ReturnExchange from "./pages/ReturnExchange/ReturnExchangePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "DeliveryInformation", element: <DeliveryInformation /> },
      { path: "favourite", element: <Favourite /> },
      { path: "Lighting", element: <LightingPage /> },
      { path: "location", element: <LocationMain /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "PurchaseTerms", element: <PurchaseTerms /> },
      { path: "Questions", element: <Questions /> },
      { path: "Terms", element: <Terms /> },
      { path: "WebsiteMap", element: <WebsiteMap /> },
      { path: "WeeklyGiftCardsPage", element: <WeeklyGiftCardsPage /> },
      { path: "ReturnExchange", element: <ReturnExchange /> },

      { path: "*", element: <NotFound /> }
    ]
  }
]);
