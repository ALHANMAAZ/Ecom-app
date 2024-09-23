import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Container;
