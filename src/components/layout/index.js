import React from "react";
import Navbar from "./header/navbar";
import Footer from "./footer/footer";
import Universe from "../universe";
const Index = ({ props }) => {
  return (
    <>
      <Navbar />
      <div {...props} />
      <Universe />
      <Footer />
    </>
  );
};

export default Index;
