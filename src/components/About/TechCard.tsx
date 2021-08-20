import React from "react";
import { motion } from "framer-motion";
import Author from "../../../config/author-meta.json";
const TechCard = () => {
  return (
    <section className="mt-10">
      <h1 className="text-4xl font-semibold BalooThambi2-SemiBold mb-2">
        Technologies I use
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Author.techsName.map((items, index) => {
          return (
            <motion.div
              whileHover={{ translateY: "-8px" }}
              className="border border-gray-200 rounded py-2 px-4 flex items-center hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer "
              key={index}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.img
                  src={`/technologies/${Author.techsSVG[index]}`}
                  className="object-cover "
                />
              </div>
              <span className="BalooThambi2-SemiBold  ml-2 flex items-center justify-center">
                {items}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechCard;
