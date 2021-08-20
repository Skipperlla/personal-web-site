import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <ResponsiveNavbar/> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
