import React from "react";

import { IGithub } from "types/types";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Author from "../../config/author-meta.json";
import BlogCard from "@components/Blog/BlogCard";

const Home = ({ repos }: IGithub) => {
  return (
    <>
      <NextSeo
        title="Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />

      <section className="flex flex-col items-center justify-between sm:flex-row">
        <span className="mb-2 sm:mb-0">
          <Image
            src={"https://avatars.githubusercontent.com/u/68515357?v=4"}
            alt="Avatar"
            width={176}
            height={176}
            className="object-cover rounded-full"
          />
        </span>
        <div className="flex flex-col justify-center sm:ml-4">
          <h1 className="text-5xl pb-1 BalooThambi2-SemiBold">
            Hi, I am Ömer.
          </h1>
          <div className="my-0 leading-6 text-gray-700 break-all	BalooThambi2-Regular ">
            {Author.aboutIndex}
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-2xl font-semibold BalooThambi2-SemiBold">
          Recent Blogs
        </h1>
        <BlogCard />
      </section>
      <section className="mt-10">
        <h1 className="text-2xl font-semibold BalooThambi2-SemiBold">
          My Projects
        </h1>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/Skipperlla/repos");
  const repos = await response.json();
  const status = response.status;
  return { props: { repos, status } };
};

export default Home;
