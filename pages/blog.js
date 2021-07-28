import { db } from "../firebase/client";
import Head from "next/head";
import Loading from "../components/Loading/Loadings";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ResponsiveFollowMe from "../components/Index/ResponsiveFollowMe";

export default function Blog({ allBlogs }) {
  // const [blogs, setBlogs] = useState(allBlogs);
  // const [end, setEnd] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const loadMore = async () => {
  //   const last = blogs[blogs.length - 1];
  //   const res = await db
  //     .collection("blogs")
  //     .orderBy("createdAt", "desc")
  //     .startAfter(new Date(last.createdAt))
  //     .limit(6)
  //     .get();
  //   const newblogs = res.docs.map((docSnap) => {
  //     return {
  //       ...docSnap.data(),
  //       createdAt: docSnap.data().createdAt.toMillis(),
  //       id: docSnap.id,
  //     };
  //   });
  //   setBlogs(blogs.concat(newblogs));
  //   setLoading(true);
  //   if (newblogs.length < 6) {
  //     setEnd(true);
  //   } else {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Head>
        <title>Skipperlla - Blog</title>
        <meta name="description" content="Skipperlla Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<h1 style={{height: "731px",display: "flex",justifyContent: "center",alignItems: "center",fontSize: "24px"}}>Geliştirme Aşamasında</h1>
      {/* <div className="grid grid-cols-1   xl:grid-cols-3 gap-4 mt-10 mb-10">
        {blogs.map((newBlogs, index) => {
          return (
            <Link href={`/blogs/${newBlogs.id}`} key={index}>
              <a className="rounded-lg cursor-pointer space-y-2 bg-gray-200 bg-opacity-40 p-3 transition-shadow hover:shadow-md dark:bg-gray-800">
                <motion.img
                  className="h-36 object-cover	 w-full rounded"
                  src={newBlogs.imageUrl}
                />
                <h2 className="font-bold text-lg leading-tight text-gray-800 truncate dark:text-gray-200 mt-3">
                  {newBlogs.title}
                </h2>
                <p className="text-gray-700 line-clamp-2 dark:text-gray-300">
                  {newBlogs.subTitle}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
      {end === false ? (
        <div className="flex justify-center align-items w-full mb-10">
          <button
            className={`rounded bg-gray-800 py-2 px-4 ${loading && "spinner"}`}
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      ) : null} */}
      <ResponsiveFollowMe />
    </>
  );
}


