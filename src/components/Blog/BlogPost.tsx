import React from "react";
import NextLink from "next/link";
import { parseISO, format } from "date-fns";

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  return <NextLink href={`blog/${slug}`} passHref></NextLink>;
};
