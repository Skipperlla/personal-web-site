import React from "react";
import { SocialIcons, StartandFork } from "../../utils/icons";
import { findLanguageToSVG, StarsFiltering } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Loadings from "../Loading/Loadings";
const Projects = ({ repos, status }) => {
  const router = useRouter();

  return (
    <section className="pt-10">
      <h1 className="font-semibold text-4xl text-center mb-5">
        My Github projects
      </h1>
      <div className="grid md:grid-cols-2 gap-4 cursor-pointer ">
        {status === 200 ? (
          <>
            {repos
              .sort((a, b) => StarsFiltering(a, b))
              .slice(0, 2)
              .map((repos, index) => {
                return (
                  <motion.div
                    className="dark:bg-gray-800 py-2 px-4 rounded-xl flex flex-col shadow-md"
                    id="projects"
                    style={{ justifyContent: "space-between" }}
                    key={index}
                    whileHover={{ translateY: "-8px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(repos.html_url);
                    }}
                  >
                    <div
                      className=" text-xl font-semibold mb-2 flex items-center "
                      style={{ justifyContent: "space-between" }}
                    >
                      <h3 className="text-green-400 ">{repos.name}</h3>
                      <span className="w-5">
                        <FontAwesomeIcon icon={SocialIcons()[2]} />
                      </span>
                    </div>
                    <p className="text-base line-clamp-2 mb-2">
                      {repos.description}
                    </p>
                    <div
                      className="flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="flex items-center ">
                        <motion.img
                          src={`/technologies/${findLanguageToSVG(
                            repos.language
                          )}`}
                          width={18}
                          height={18}
                        />
                        <span className="ml-2">{repos.language}</span>
                      </div>
                      <div className="flex justify-center items-center text-xl">
                        <span className="w-4 ml-2">{repos.forks}</span>
                        <FontAwesomeIcon
                          icon={StartandFork()[0]}
                          className="w-4 ml-2"
                        />{" "}
                        <span className="ml-2 ">{repos.stargazers_count}</span>
                        <FontAwesomeIcon
                          icon={StartandFork()[1]}
                          className="w-5 ml-2"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </>
        ) : (
          <>
            <Loadings />
            <Loadings />
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
