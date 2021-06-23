import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterIcons } from "../../utils/icons";
import { motion } from "framer-motion";
import author from "../../config/author-meta.json";
const ResponsiveFollowMe = () => {
  return (
    <div className="flex flex-col xl:hidden pt-10">
      <div className="font-semibold text-xl">
        <h1 className="mb-2">Follow Me</h1>
      </div>
     <div className="flex  space-x-4  text-2xl">
        {author.socials.map((social, index) => {
          return (
            <motion.a
              whileHover={{ translateY: "-5px" }}
              className="w-7 h-7 md:w-8 md:h-8	object-cover"
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
  );
};

export default ResponsiveFollowMe;
