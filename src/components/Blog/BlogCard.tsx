import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
interface IBlogCard {
  slug: string;
  title: string;

  publishedAt: string;
  summary: string;
}
const BlogCard: React.FC<IBlogCard> = ({
  slug,
  title,
  publishedAt,
  summary,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="border border-gray-300 p-4 mt-4 rounded hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="BalooThambi2-SemiBold">{title}</h3>
          <ArrowNarrowRightIcon
            className="w-7 h-7 font-light text-gray-300 "
            aria-hidden="true"
          />
        </div>
        <div className="text-gray-400 text-xs word tracking-widest mb-4 mt-1">
          <span className="uppercase">5 MIN READ</span>-
          <span className="uppercase">{publishedAt}</span>
        </div>
        <p className="text-gray-700 BalooThambi2-Regular ">{summary}</p>
      </a>
    </Link>
  );
};

export default BlogCard;
