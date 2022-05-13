import React from "react";
import Navbar from "./header/navbar";
import Footer from "./footer/footer";
import Universe from "../universe";
import FinCrip from "../finProtocol";
const Index = ({ props }) => {
  return (
    <>
      <Navbar />
      <div {...props} />
      <FinCrip />
      <Footer />
    </>
  );
};

export default Index;
