import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loadings from "../Loading/Loadings";
const OlderSongs = ({ RecentlyPlayed }) => {
  const olderSongs = RecentlyPlayed.olderSongs.slice(0, 9);

  return (
    <>
      <h1 className="text-3xl mb-5">Recently Played Tracks</h1>
      <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {olderSongs.map((OlderSongs, index) => {
          return (
            <motion.a
              key={index}
              href={OlderSongs.track.external_urls.spotify}
              target="_blank"
              whileHover={{ translateY: "-8px" }}
              className="dark:bg-gray-800  bg-gray-100 py-2 px-4 rounded flex cursor-pointer "
            >
              <motion.img
                src={OlderSongs.track.album.images[2].url}
                className="w-16 h-16 object-cover	 rounded items-center"
              />
              <div className="flex flex-col ml-3">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {new Date(OlderSongs.played_at).toLocaleDateString()}
                </span>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 truncate w-52 lg:w-40">
                  {OlderSongs.track.name}
                </h3>
              </div>
            </motion.a>
          );
        })}
      </div>
    </>
  );
};

export default OlderSongs;
