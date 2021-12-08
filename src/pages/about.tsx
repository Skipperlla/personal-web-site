import { motion } from "framer-motion";
import Author from "../../config/author-meta.json";
import React from "react";
import { NextSeo } from "next-seo";
const about = () => {
  return (
    <>
      <NextSeo
        title="About | Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />

      <section className="mt-10">
        <h1 className="text-4xl font-semibold BalooThambi2-SemiBold mb-2">
          Recent Blogs
        </h1>
        <p className="text-gray-700 BalooThambi2-Regular text-xl">
          Two years ago, I was introduced to programming for the first time and
          started developing software professionally for about a year. I clearly
          remember writing my first lines of code, getting stuck, finding the
          problem and fixing it. At this point, I realized that there was a
          rewarding feeling I experienced when the app ran. I quickly learned
          what I wanted to be in life. Since then my passion has never changed,
          I`ve gained more skills along the way. <br />
          <br /> When I`m not working, I learn Adobe Premiere Pro and Adobe
          Photoshop to improve myself and learn new skills.
        </p>
      </section>
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
    </>
  );
};

export default about;
