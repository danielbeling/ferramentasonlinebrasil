import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from '../../Footer'

import './Curriculo.css'


function Curriculo() {
  return (
    <div className="curriculo">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Curriculo;