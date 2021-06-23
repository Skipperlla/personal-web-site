import { MyPlayLists } from "../../lib/Spotify";
export default async function myPlayLists(req, res) {
  const response = await MyPlayLists();
  const PlayLists = await response.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  return res.status(200).json({ PlayLists });
}
