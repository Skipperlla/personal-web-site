import NextLink from "next/link";
const MDXComponents = {
  h1: (props: any) => <h1 {...props}></h1>,
  h2: (props: any) => <h2 {...props} className="mt-8"></h2>,
  h3: (props: any) => <h3 {...props} className="mt-8"></h3>,
  h4: (props: any) => <h4 {...props} className="mt-8"></h4>,
  h5: (props: any) => <h5 {...props} className="mt-8"></h5>,
  h6: (props: any) => <h6 {...props} className="mt-8"></h6>,
};

export default MDXComponents;
