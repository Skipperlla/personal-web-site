import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Gif from "../../public/animated-under-construction-image-0035.gif";
interface IBlog {
  posts: any;
}
export default function Blog({ posts }: IBlog) {
  return (
    <article className="h-screen flex items-center justify-center">
      <NextSeo
        title="Blog | Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />
      <h1></h1>
      <div className="flex items-center mt-2 mb-16 uppercase">
        <div className="flex items-center">
          <div className="flex">
            <div
              style={{
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
                boxSizing: "border-box",
                margin: "0px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  maxWidth: "100%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    margin: "0px",
                    border: "none",
                    padding: "0px",
                  }}
                />
              </div>
              <img
                alt="Drawing of me"
                className="border border-gray-500 border-solid rounded-full"
                srcSet="/_next/image?url=%2Fimages%2Fme.png&w=48&q=75 1x, /_next/image?url=%2Fimages%2Fme.png&w=96&q=75 2x"
                src="/_next/image?url=%2Fimages%2Fme.png&w=96&q=75"
                decoding="async"
                data-nimg="true"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col ml-2.5">
            <span className="m-0 text-sm font-semibold leading-5 tracking-wide text-gray-700">
              Alan Yang
            </span>
            <span className="m-0 text-xs font-medium leading-4 tracking-wide text-gray-500">
              5 min read -&nbsp;<time dateTime="2021-07-08">Jul 08, 2021</time>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function getStaticProps() {
  //TODO fetch blog psots
  return { props: { posts } };
}
