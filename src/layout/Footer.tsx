import { fetcher } from "@lib/fetch";
import { motion } from "framer-motion";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
const Footer = () => {
  const { data, error } = useSWR("api/spotify", fetcher);
  const router = useRouter();
  return (
    <footer>
      <div className="flex flex-col items-center justify-center mb-4 space-y-3">
        <div
          className={`flex items-center justify-center hover:shadow-md transition-shadow duration-200 ease-in-out ${
            data?.song.is_playingyarn && "cursor-pointer"
          }`}
          onClick={() =>
            data?.song.is_playing &&
            window.open(data?.song.item.external_urls.spotify, "_ blank")
          }
        >
          <div className="relative flex flex-row items-center p-2 space-x-2 border border-gray-300 rounded w-80 h-21">
            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 border border-transparent border-solid rounded">
              {data?.song.is_playing && (
                <motion.img
                  src={data?.song.item.album.images[0].url}
                  className="object-cover"
                />
              )}
            </div>
            <span className="space-y-1 w-[10.5rem]">
              <div
                className="text-lg font-medium truncate"
                style={{ width: "207px" }}
                title={
                  data?.song.is_playing ? data?.song.item.name : "Not Listening"
                }
              >
                {data?.song.is_playing ? data?.song.item.name : "Not Listening"}
              </div>
              <div
                className="text-xs text-gray-500"
                title={
                  data?.song.is_playing
                    ? data?.song.item.artists[0].name
                    : "Not Listening"
                }
              >
                {data?.song.is_playing
                  ? data?.song.item.artists[0].name
                  : "Not Listening"}
              </div>
            </span>
            <span className="absolute top-4 right-2">
              <svg
                viewBox="0 0 168 168"
                focusable="false"
                role="presentation"
                className="w-6 h-6"
              >
                <path
                  fill="#1DB954"
                  d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <a
            aria-label="Send me an Email"
            href="mailto:oesmer437@gmail.com"
            className="rounded"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 transition-colors duration-200 ease-in-out border border-transparent rounded hover:bg-black hover:text-white">
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
            </div>
          </a>
          <a
            aria-label="Follow me on Instagram"
            href="https://www.instagram.com/skipperlla/"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 transition-colors duration-200 ease-in-out border border-transparent rounded hover:bg-black hover:text-white">
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
            </div>
          </a>
          <a
            aria-label="Follow me on Twitter"
            href="https://twitter.com/skipperlla"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 transition-colors duration-200 ease-in-out border border-transparent rounded hover:bg-black hover:text-white">
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
            </div>
          </a>
          <a
            aria-label="Connect with me on LinkedIn"
            href="https://www.linkedin.com/in/??meresmer/"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 transition-colors duration-200 ease-in-out border border-transparent rounded hover:bg-black hover:text-white">
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
            </div>
          </a>
          <a
            aria-label="Follow me on Github"
            href="https://github.com/Skipperlla"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 transition-colors duration-200 ease-in-out border border-transparent rounded hover:bg-black hover:text-white">
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
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center">
          ?? 2021 Skipperlla.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
