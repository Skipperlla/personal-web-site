/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
const DropdownMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Menu as="li" className="">
      <Menu.Button className="flex items-center justify-center">
        <span className="text-xl BalooThambi2-Regular ml-6  text-gray-900   transition-colors duration-200 ease-in-out hover:text-gray-300 flex items-center justify-center">
          Contact
        </span>
        {isOpen ? (
          <XIcon
            className="-mr-1 ml-2 h-5 w-5 bg-gray-300 rounded-full p-0.5"
            aria-hidden="true"
            onClick={() => setisOpen(!isOpen)}
          />
        ) : (
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 bg-gray-300 rounded-full "
            aria-hidden="true"
            onClick={() => setisOpen(!isOpen)}
          />
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute z-10 px-0 mt-3 BalooThambi2-Regular right-3 sm:right-1/4">
          <div className="overflow-hidden border rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border-coolGray-300">
            <div className="relative grid gap-6 px-5 py-6 bg-white">
              <a
                aria-label="Send me an Email"
                href="oesmer437@gmail.com"
                className="flex items-center p-3 -mx-2 -my-3 transition-colors duration-150 ease-in-out rounded-md group hover:bg-gray-100"
              >
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-900">
                  oesmer437@gmail.com
                </span>
              </a>
              <a
                aria-label="Follow me on Instagram"
                href="https://www.instagram.com/skipperlla/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center p-3 -mx-2 -my-3 transition-colors duration-150 ease-in-out rounded-md group hover:bg-gray-100"
              >
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-900">
                  Skipperlla
                </span>
              </a>
              <a
                aria-label="Follow me on Twitter"
                href="https://twitter.com/skipperlla"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center p-3 -mx-2 -my-3 transition-colors duration-150 ease-in-out rounded-md group hover:bg-gray-100"
              >
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-900">
                  Skipperlla
                </span>
              </a>
              <a
                aria-label="Connect with me on LinkedIn"
                href="https://www.linkedin.com/in/%C3%B6meresmer/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center p-3 -mx-2 -my-3 transition-colors duration-150 ease-in-out rounded-md group hover:bg-gray-100"
              >
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x={2} y={9} width={4} height={12} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-900">
                  Ömer Esmer
                </span>
              </a>
              <a
                aria-label="Follow me on Github"
                href="https://github.com/Skipperlla"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center p-3 -mx-2 -my-3 transition-colors duration-150 ease-in-out rounded-md group hover:bg-gray-100"
              >
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-900">
                  Skipperlla
                </span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
