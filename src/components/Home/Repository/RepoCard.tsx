import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { IRepos } from "types/types";
import { useRouter } from "next/router";
import Link from "next/link";
import Author from "../../../../config/author-meta.json";
const RepoCard = ({
  stargazers_count,
  language,
  description,
  forks_count,
  name,
  url,
}: IRepos) => {
  const router = useRouter();
  const languageIndex = Author.techsName.indexOf(language);
  const languageSVG = Author.techsSVG[languageIndex];
  return (
    <Link href={url}>
      <a
        className="border border-gray-300 p-4 mt-4 rounded hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer"
        target="_blank"
      >
        <div className="flex items-center justify-between">
          <h3 className="BalooThambi2-SemiBold">{name}</h3>{" "}
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="w-8 h-8 font-light "
            aria-hidden="true"
          />
        </div>

        <p className="text-gray-700 truncate break-all BalooThambi2-Regular">
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center justify-center">
            <motion.img
              src={`/technologies/${languageSVG}`}
              alt="Avatar"
              className="object-cover  w-5 h-5"
            />
            <span className=" mx-2 BalooThambi2-Regular flex items-center justify-center">
              {language}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={["fas", "code-branch"]}
                className="object-cover  w-5 h-5 font-light "
              />
              <span className=" mx-2 ">{forks_count}</span>
            </div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="object-cover  w-5 h-5 font-light "
              />
              <span className=" mx-2">{stargazers_count}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RepoCard;
