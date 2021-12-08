import { renderToString } from 'next-mdx-remote';
import fs from "fs";

import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import MDXComponents from "@components/Blog/MDXComponents";

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "/src/data", type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(
        path.join(root, "/src/data", type, `${slug}.mdx`),
        "utf-8"
      )
    : fs.readFileSync(path.join(root, "/src/data", `${type}.mdx`), "utf-8");
  const { data, context } = matter(source);
  const mdxSource = await renderToString(context, {
    components: MDXComponents,
  });
  return {
    mdxSource,
    frontMatter: {
      wordCount: context.split(/\s+/gu).length,
      readingTime: readingTime(context),
      slug: slug || null,
      ...data,
    },
  };
}
export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, "/src/data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "/src/data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
