import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loadings from "../Loading/Loadings";
export default function Left({ name, spotifyURL, artist, date, isPlaying }) {
  var s = new Date(date).toLocaleDateString("tr-tr");
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-5">Currently Playing</h1>
      {isPlaying ? (
        <div className="flex flex-col">
          <Link href={spotifyURL}>
            <a>
              <motion.img
                whileHover={{ translateY: "-8px" }}
                src="https://spotify-current-playing-iota.vercel.app/api/spotify"
                className="bg-opacity-40 bg-gray-200 dark:bg-gray-800 w-full mb-2 rounded"
              ></motion.img>
            </a>
          </Link>

          <Link href={spotifyURL}>
            <a>
              <div className="flex dark:bg-gray-800 rounded py-2 px-4 justify-center align-items bg-opacity-40 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-200">
                <motion.img
                  src="spotify.svg"
                  className="w-7 h-7 object-cover mr-2"
                />
                <span>Spotify</span>
              </div>
            </a>
          </Link>
          <div className="flex flex-col space-y-2 mt-2">
            <div
              className="dark:bg-gray-800 rounded py-2 px-4 bg-opacity-40 bg-gray-200 flex items-center"
              style={{ justifyContent: "space-between" }}
            >
              <span className="text-gray-900 dark:text-gray-100">Name</span>
              <span className="text-gray-900 dark:text-gray-100">{name}</span>
            </div>
            <div
              className="dark:bg-gray-800 rounded py-2 px-4 bg-opacity-40 bg-gray-200 flex items-center"
              style={{ justifyContent: "space-between" }}
            >
              <span className="text-gray-900 dark:text-gray-100">Artist</span>
              <span className="text-gray-900 dark:text-gray-100">{artist}</span>
            </div>{" "}
            <div
              className="dark:bg-gray-800 rounded py-2 px-4 bg-opacity-40 bg-gray-200 flex items-center"
              style={{ justifyContent: "space-between" }}
            >
              <span className="text-gray-900 dark:text-gray-100">Date</span>
              <span className="text-gray-900 dark:text-gray-100">{s}</span>
            </div>
          </div>
        </div>
      ) : (
        <Loadings />
      )}
    </div>
  );
}
