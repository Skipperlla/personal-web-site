import { Transition } from "@headlessui/react";
import NavList from "../config/ListItems.json";
import Link from "next/link";
import { useRouter } from "next/router";
import RenderThemeChangerResponsive from "../utils/RenderThemeChangerResponsive";
const ResponsiveNavbar = ({ isOpen, setIsOpen, user }) => {
  const router = useRouter();
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div
        className="xl:hidden rounded-md space-y-4 bg-gray-200 shadow-lg p-4 top-3 left-4 z-20 absolute dark:bg-gray-800 w-11/12	"
        id="mobile-menu"
      >
        <div className="flex text-gray-900 items-center justify-between dark:text-gray-100">
          <h3 className="font-medium text-lg">Menu</h3>{" "}
          <div onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {NavList.NavList.map((newList, index) => {
          return (
            <Link href={newList.pathname} key={index}>
              <a className="rounded-md flex bg-gray-300 py-2 px-4 text-gray-800 justify-center dark:bg-gray-700 dark:text-gray-200">
                {newList.name}
              </a>
            </Link>
          );
        })}
        {user && (
          <>
            <Link href={"/createBlog"}>
              <a
                className={
                  "rounded-md flex bg-gray-300 py-2 px-4 text-gray-800 justify-center dark:bg-gray-700 dark:text-gray-200"
                }
              >
                Blog Ekle
              </a>
            </Link>{" "}
            <button
              className={
                "rounded-md flex bg-gray-300 py-2 px-4 text-gray-800 justify-center dark:bg-gray-700 dark:text-gray-200 w-full"
              }
              onClick={() => {
                auth.signOut();
                router.push("/login");
              }}
            >
              Logout
            </button>
          </>
        )}
        <RenderThemeChangerResponsive />
      </div>
    </Transition>
  );
};

export default ResponsiveNavbar;
