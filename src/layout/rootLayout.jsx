import React from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
const RootLayout = ({ products }) => {
  return (
    <>
      <NavBar products={products} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
