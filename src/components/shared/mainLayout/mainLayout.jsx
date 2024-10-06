import React from "react";
import Footer from "../footer/footer";
import HeaderMain from "../header/headerMain";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../header/headerMenu";

export default function mainLayout() {
  return (
    <>
      <HeaderMain />
      <HeaderMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
