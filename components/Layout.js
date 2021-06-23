import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import ResponsiveNavbar from "./ResponsiveNavbar";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <>
      <div className="border-green-400 border-t-8 w-full"></div>
      <div className="xl:w-7/12 w-11/12 mx-auto">
        <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        {children}
      </div>
    </>
  );
};

export default Layout;
