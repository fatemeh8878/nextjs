import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
