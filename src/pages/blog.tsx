import React from "react";
import { NextSeo } from "next-seo";
import { getAllFilesFrontMatter } from "@lib/mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogCard from "@components/Blog/BlogCard";
interface IBlog {
  posts: any;
}

export default function Blog({ posts }: IBlog) {
  console.log(posts);
  return (
    <>
      <NextSeo
        title="Blog | Ömer Esmer - Web Developer"
        description="Ömer Esmer is a web developer currently based in Turkey. Contact him at oesmer437@gmail.com"
      />
      <section className="">
        <h1 className="text-4xl font-semibold BalooThambi2-SemiBold mb-2">
          Blog
        </h1>
        <div className="flex border rounded hover:shadow py-1 px-4">
          <input className="text-gray-700  text-xl w-full  flex-1" />
          <button>
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </section>
      <section className="mt-6">
        {posts.map((items, index) => {
          return (
            <BlogCard
              slug={items.slug}
              title={items.title}
              publishedAt={items.publishedAt}
              summary={items.summary}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
