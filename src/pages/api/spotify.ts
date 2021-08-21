import type { NextApiHandler } from "next";
import { getNowPlaying } from "@lib/Spotify";
const spotify: NextApiHandler = async (_, res) => {
  const response = await getNowPlaying();

  const song = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  return res.status(200).json({
    song,
  });
};

export default spotify;
