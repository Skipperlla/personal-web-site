import React from "react";
import Image from "next/image";
import Logo from "../../public/avatar.png";
import { useRouter } from "next/dist/client/router";
import DropdownMenu from "@components/DropdownMenu";
import Items from "../../config/ListItems.json";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between h-20 ">
      <div className="w-full max-w-4xl mx-auto px-4 flex items-center justify-between">
        <Image
          src={Logo}
          alt=""
          width={50}
          height={50}
          className="object-cover flex items-center justify-center rounded-full"
        />
        <ul className="flex">
          {Items.ListItems.map((child, index) => {
            return (
              <Link href={child.target} key={index}>
                <a
                  className={`text-xl  BalooThambi2-Regular ml-6  text-gray-900   transition-colors duration-200 ease-in-out hover:text-gray-300 ${
                    child.target === router.pathname &&
                    " border-b-2 border-gray-300 -mb-1"
                  }`}
                >
                  <span className="pb-1">{child.title}</span>
                </a>
              </Link>
            );
          })}

          <DropdownMenu />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
