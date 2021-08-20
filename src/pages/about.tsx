import AboutMe from "@components/About/AboutMe";
import TechCard from "@components/About/TechCard";
import React from "react";
import { NextSeo } from "next-seo";
const about = () => {
  return (
    <>
      <NextSeo
        title="About | Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />
      <div className="max-w-3xl px-6 mx-auto mt-10 mb-12 prose scroll-margin">
        <AboutMe />
        <TechCard />
      </div>{" "}
    </>
  );
};

export default about;
