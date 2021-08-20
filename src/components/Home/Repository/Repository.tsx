import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import RepoCard from "./RepoCard";
import { IGithub } from "types/types";

const Repository = ({ repos }: IGithub) => {
  return (
    <section className="mt-10">
      <h1 className="text-2xl font-semibold BalooThambi2-SemiBold">My Github Repositories</h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {repos
          .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 4)
          .map((items, index) => {
            return (
              <RepoCard
                key={index}
                stargazers_count={items.stargazers_count}
                language={items.language}
                description={items.description}
                forks_count={items.forks_count}
                name={items.name}
                url={items.html_url}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Repository;
