import { MyPlayLists } from "../../lib/Spotify";
export default async function myPlayLists(req, res) {
  const response = await MyPlayLists();
  const PlayLists = await response.json();

  return res.status(200).json({ PlayLists });
}
