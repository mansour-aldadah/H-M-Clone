// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import langContext from "./services/context/langContext";
// import React, { useContext } from "react";

// import { useState, useEffect } from "react";

// import { RouterProvider } from "react-router-dom";
// import { routes } from "./routersConfi";

// export default function App() {
//   const [lang, setLang] = useState("ar");
//   const [direction, setDirection] = useState("rtl");

//   if (lang === "ar" || lang === "en") {
//     setDirection("rtl");
//   } else {
//     setDirection("ltr");
//   }

//   return (
//     <div dir={{ direction }}>
//       <langContext.Provider value={[lang, setLang]}>
//         <RouterProvider router={routes} />
//       </langContext.Provider>
//     </div>
//   );
// }

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import langContext from "./services/context/langContext";
import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routersConfi";

export default function App() {
  // Initialize lang from localStorage or default to 'ar'
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ar");
  const [direction, setDirection] = useState("rtl");

  useEffect(() => {
    if (lang === "ar") {
      setDirection("rtl");
    } else if (lang === "en") {
      setDirection("ltr");
    }

    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div dir={direction}>
      <langContext.Provider value={[lang, setLang]}>
        <RouterProvider router={routes} />
      </langContext.Provider>
    </div>
  );
}
