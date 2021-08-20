import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const BlogCard = () => {
  return (
    <div className="border border-gray-300 p-4 mt-4 rounded hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between">
        <h3 className="BalooThambi2-SemiBold">
          Different Ways to Fetch Data in React
        </h3>{" "}
        <ArrowNarrowRightIcon
          className="w-7 h-7 font-light text-gray-300 hidden sm:block"
          aria-hidden="true"
        />
      </div>
      <div className="text-gray-400 text-xs word tracking-widest mb-4 mt-1">
        <span className="uppercase">5 MIN READ</span>-
        <span className="uppercase">JUL 08,2021</span>
      </div>
      <p className="text-gray-700 BalooThambi2-Regular ">
        There are many ways to fetch data in React. Fetch, Axios, Async/Await,
        SWR, and React Query are among the most common when fetching data in
        React.
      </p>
    </div>
  );
};

export default BlogCard;
