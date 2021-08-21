import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Gif from "../../public/animated-under-construction-image-0035.gif";
const blog = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <NextSeo
        title="Blog | Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />
      <Image src={Gif} alt="s" />
    </div>
  );
};

export default blog;
