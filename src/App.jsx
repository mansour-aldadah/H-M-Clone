import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import langContext from "./services/context/langContext";
import React, { useContext } from "react";

import { useState, useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routersConfi";

export default function App() {
  const [lang, setLang] = useState("ar");

  return (
    <>
      <langContext.Provider value={[lang, setLang]}>
        <RouterProvider router={routes} />
      </langContext.Provider>
    </>
  );
}
