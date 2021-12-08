import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {/* <ResponsiveNavbar/> */}
      <div
        className="max-w-3xl flex-1 px-6 mx-auto mt-10 mb-12 prose scroll-margin"
        style={{ width: "768px" }}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
