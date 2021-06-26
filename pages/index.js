import { NextSeo } from "next-seo";
import Header from "../components/Index/Header";
import Projects from "../components/Index/Projects";
import ResponsiveFollowMe from "../components/Index/ResponsiveFollowMe";
import Technologies from "../components/Index/Technologies";
import { GetRepository } from "../lib/Github";
import publicIP from "public-ip";
export default function Home({ repos, status, IPAdress }) {
  console.log(IPAdress);
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
        <Projects repos={repos} status={status} />
        <ResponsiveFollowMe />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await GetRepository();
  const repos = await response.json();
  const status = response.status;
  const IPAdress = await publicIP.v4();
  return { props: { repos, status, IPAdress } };
};
