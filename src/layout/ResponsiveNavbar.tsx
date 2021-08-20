import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
const ResponsiveNavbar = () => {
  return (
    <div className="flex items-center space-x-5 sm:space-x-7">
      {" "}
      <Image
        src={Logo}
        alt=""
        width={80}
        height={80}
        className="object-cover"
      />
      <Link href="/">
        <a
          aria-label="Home"
          className="border-transparent text-xl text-gray-900 transition-colors duration-200 ease-in-out hover:text-gray-300  -mb-px"
        >
          <span className="hidden sm:inline-block">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block w-10 h-10 sm:hidden"
            aria-hidden="true"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      <Link href="/blog">
        <a
          aria-label="Blog"
          className="border-gray-300 text-xl text-gray-900 transition-colors duration-200 ease-in-out hover:text-gray-300 border-b-2 -mb-px"
        >
          <span className="hidden sm:inline-block">Blog</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block w-10 h-10 sm:hidden"
            aria-hidden="true"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default ResponsiveNavbar;
