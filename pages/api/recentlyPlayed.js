import { RecentlyPlayed } from "../../lib/Spotify";

export default async function handlerRecentlyPlayed(_, res) {
  const response = await RecentlyPlayed();
  const Recentlyplayed = await response.json();
  const olderSongs = Recentlyplayed.items;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({ olderSongs });
}
