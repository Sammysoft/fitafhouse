import React from "react";
import Header from "../Components/Header/Header2";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import About from "../Components/about";
import Partner from "../Components/partner";
import Horizon from "../Components/Horizons";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Partner />
      <Horizon />
      <Footer />
    </>
  );
};
export default AboutPage;
