import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author from "../../config/author-meta.json";
import { SocialIcons } from "../../utils/icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col-reverse   md:flex-row">
      <div className="md:w-full">
        <div className="font-semibold text-3xl">
          <h1>Self learning</h1>
          <h1>
            <span className="text-green-400">Full-stack</span> web developer
          </h1>
        </div>
        <p className="text-gray-800 dark:text-gray-200">{author.explanation}</p>
        <div className="flex md:justify-start text-xs">
          {author.socials.map((social, index) => {
            return (
              <motion.a
                whileHover={{ translateY: "-5px" }}
                className="mx-2 my-3 text-xl w-5 object-cover"
                style={{ color: social.color }}
                target="_blank"
                href={social.href}
                key={index}
              >
                <FontAwesomeIcon icon={SocialIcons()[index]} />
              </motion.a>
            );
          })}
        </div>
      </div>
      <div className="flex flex-shrink-0 mb-8 md:justify-end md:mb-0 md:w-4/12">
        <motion.img
          src="avatar.png"
          className="rounded-full h-40   w-40 "
          whileHover={{ translateY: "-8px" }}
          draggable={false}
        />
      </div>
    </header>
  );
};

export default Header;
