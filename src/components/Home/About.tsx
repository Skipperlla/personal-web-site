import React from "react";
import Avatar from "../../../public/avatar.png";
import Image from "next/image";
import Author from "../../../config/author-meta.json";
const About = () => {
  return (
    <section className="flex flex-col items-center justify-between sm:flex-row">
      <span className="mb-2 sm:mb-0">
        <Image
          src={Avatar}
          alt="Avatar"
          width={176}
          height={176}
          className="object-cover rounded-full"
        />
      </span>
      <div className="flex flex-col justify-center sm:ml-4">
        <h1 className="text-5xl pb-1 BalooThambi2-SemiBold">Hi, I am Ömer.</h1>
        <div className="my-0 leading-6 text-gray-700 break-all	BalooThambi2-Regular ">
          {Author.aboutIndex}
        </div>
      </div>
    </section>
  );
};

export default About;
