import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/shared/footer/footer";
/* import AllProducts from "./pages/AllProducts/AllProducts"; */
import HomePage from "./pages/home/homePage";
import langContext from "./services/context/langContext";
import React, { useContext } from "react";

import { useState, useEffect } from "react";
import HeaderMain from "./components/layout/header/headerMain";

export default function App() {
  const [lang, setLang] = useState("ar");

  return (
    <>
      {/*   <langContext.Provider value={[lang, setLang]}>
        <HeaderMain />
      </langContext.Provider> */}
      {/*  
      
      <Footer /> */}
    </>
  );
}
