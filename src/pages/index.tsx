import React from "react";
import About from "@components/Home/About";
import RecentBlogs from "@components/Home/Blog/RecentBlogs";
import Repository from "@components/Home/Repository/Repository";
import { IGithub } from "types/types";
import { NextSeo } from "next-seo";
const Home = ({ repos }: IGithub) => {
  return (
    <>
      <NextSeo
        title="Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />
      <div className="max-w-3xl px-6 mx-auto mt-10 mb-12 prose scroll-margin">
        <About />
        <RecentBlogs />
        <Repository repos={repos} />
      </div>
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
