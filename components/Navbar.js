import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import NavList from "../config/ListItems.json";
import RenderThemeChanger from "../utils/RenderThemeChanger";
import { auth } from "../firebase/client";
const Navbar = ({ setIsOpen, isOpen, user }) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav
        className="xl:w-7/12 mx-auto flex justify-center items-center pt-10 w-11/12"
        style={{ justifyContent: "space-between" }}
      >
        <Link href="/">
          <a>
            <motion.img
              src="https://avatars.githubusercontent.com/u/68515357?v=4"
              className="w-16 h-16 rounded-full object-cover"
              draggable={false}
              whileHover={{ translateY: "-8px" }}
            />
          </a>
        </Link>
        <ul className="text-white flex items-center justify-center hidden md:flex">
          {NavList.NavList.map((newList, index) => {
            return (
              <li
                key={index}
                className="ml-3  text-gray-800 dark:text-gray-200"
              >
                <Link href={newList.pathname}>
                  <a
                    className={`rounded py-1 px-2 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100 ${
                      router.pathname == newList.pathname
                        ? "bg-gray-100 dark:bg-gray-800"
                        : ""
                    }`}
                  >
                    {newList.name}
                  </a>
                </Link>
              </li>
            );
          })}
          {user && (
            <>
              <li className="ml-3  text-gray-800 dark:text-gray-200">
                {" "}
                <Link href={"/createBlog"}>
                  <a
                    className={`rounded py-1 px-2 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100 ${
                      router.pathname == "createBlog"
                        ? "bg-gray-100 dark:bg-gray-800"
                        : ""
                    }`}
                  >
                    Blog Ekle
                  </a>
                </Link>
              </li>
              <li className="ml-3  text-gray-800 dark:text-gray-200">
                {" "}
                <button
                  className={`rounded py-1 px-2 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100 ${
                    router.pathname == "loginF"
                      ? "bg-gray-100 dark:bg-gray-800"
                      : ""
                  }`}
                  onClick={() => {
                    auth.signOut();
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}

          <RenderThemeChanger mounted={mounted} />
        </ul>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 text-gray-900 w-8 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>{" "}
      </nav>
    </>
  );
};

export default Navbar;
