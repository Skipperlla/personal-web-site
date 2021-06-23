import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterIcons } from "../utils/icons";
import { motion } from "framer-motion";
import author from "../config/author-meta.json";
const Footer = () => {
  return (
    <footer
      className="mt-7  border-green-400  md:w-full md:pt-5"
      style={{ borderBottomWidth: "7px" }}
    >
      <div className="w-11/12 xl:w-7/12 grid md:grid-cols-1 w-11/12 md:mx-auto ">
        <div className="flex justify-between items-center w-11/12 md:w-full mx-auto">
          <p className="text-sm md:text-xl">
            © 2021 all rights reserved. Made with by{" "}
            <Link href="https://github.com/Skipperlla">
              <a className="text-green-400">skipperlla</a>
            </Link>{" "}
            using{" "}
            <Link href="https://tailwindcss.com/">
              <a className="text-green-400">TailwindCSS</a>
            </Link>{" "}
          </p>
          <div className="flex justify-end space-x-4  text-xs xl:text-2xl mb-2 hidden xl:flex">
            {author.socials.map((social, index) => {
              return (
                <motion.a
                  whileHover={{ translateY: "-5px" }}
                  className="w-4 h-4 md:w-7 md:h-7	object-cover"
                  style={{ color: social.color }}
                  target="_blank"
                  href={social.href}
                  key={index}
                >
                  <FontAwesomeIcon icon={FooterIcons()[index]} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
