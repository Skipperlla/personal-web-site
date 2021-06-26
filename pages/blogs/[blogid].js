import React from "react";
import { db } from "../../firebase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { motion } from "framer-motion";
import ResponsiveFollowMe from "../../components/Index/ResponsiveFollowMe";
export default function BlogPage({ blog }) {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold mb-5 dark:text-gray-100">
        {blog.title}
      </h2>
      <h3 className="mb-5">{blog.subTitle}</h3>
      <div className="flex ">
        <span className="bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded mr-5 flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 w-5" />
          {blog.postedBy}
        </span>
        <span className="bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faClock} className="w-5 mr-2" />
          {moment(blog.created).format("ll")}
        </span>
      </div>
      <motion.img src={blog.imageUrl} className="mt-10 rounded" />
      <p className="mt-10 text-left">{blog.body}</p>
      <ResponsiveFollowMe />
    </div>
  );
}

export const getServerSideProps = async ({ params: { blogid } }) => {
  const result = await db.collection("blogs").doc(blogid).get();
  return {
    props: {
      blog: {
        ...result.data(),
        createdAt: result.data().createdAt.toMillis(),
      },
    },
  };
};
