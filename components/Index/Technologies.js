import React from "react";
import author from "../../config/author-meta.json";
import { motion } from "framer-motion";
const Technologies = () => {
  return (
    <section className=" pt-10">
      <h1 className="font-semibold text-4xl text-center mb-5">
        Technologies I use
      </h1>
      <div className="grid grid-flow grid-cols-2 md:grid-cols-5 md:grid-rows-3 gap-4">
        {author.techsName.map((techs, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              whileHover={{ translateY: "-5px" }}
              className="flex my-2 items-center py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md bg-white dark:bg-gray-800"
              key={index}
            >
              <motion.img
                src={`/technologies/${author.techsSVG[index]}`}
                width={18}
                height={18}
                className="inline-block mr-2 self-center"
              />
              <span className="text-center font-semibold">{techs}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
