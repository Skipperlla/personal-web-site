import { NextSeo } from "next-seo";
import Header from "../components/Index/Header";
import Projects from "../components/Index/Projects";
import ResponsiveFollowMe from "../components/Index/ResponsiveFollowMe";
import Technologies from "../components/Index/Technologies";

export default function Home({ repos }) {
  return (
    <>
      <NextSeo
        title="Home - skipperlla.xyz"
        description="Hello my name is Ömer I am from Turkey and I am self learning web developer.I ve recently started building complex web apps using React,Next.js and Tailwind CSS."
        canonical="https://skipperlla.xyz/"
      >
        <link rel="icon" href="/avatar.png" />
      </NextSeo>
      <div className=" pt-12">
        <Header />
        <Technologies />
        <Projects repos={repos.repos} status={repos.status} />
        <ResponsiveFollowMe />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/Github");
  const repos = await res.json();
  return { props: { repos } };
};
