import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

const Layout = ({ children }) => {
  return (
    <>
      <section className=" fixed top-0 left-0 -z-10">
        <Background />
      </section>
      <section className=" z-0 flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
