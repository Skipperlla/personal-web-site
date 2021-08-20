import React from "react";
import About from "@components/Home/About";
import RecentBlogs from "@components/Home/Blog/RecentBlogs";
import Repository from "@components/Home/Repository/Repository";
import { IGithub } from "types/types";

const Home = ({ repos }: IGithub) => {
  return (
    <div className="max-w-3xl px-6 mx-auto mt-10 mb-12 prose scroll-margin">
      <About />
      <RecentBlogs />
      <Repository repos={repos} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/Skipperlla/repos");
  const repos = await response.json();
  const status = response.status;
  return { props: { repos, status } };
};

export default Home;
