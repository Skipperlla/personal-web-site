import { getNowPlaying } from "../../lib/Spotify";
export default async function handler(req, res) {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }
  const song = await response.json();
  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const artist = song.item.album.artists[0].name;
  const name = song.item.name;
  const spotifyURL = song.item.external_urls.spotify;
  const timestamp = song.timestamp;
  const isPlaying = song.is_playing;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    artist,
    name,
    spotifyURL,
    timestamp,
    isPlaying,
  });
}
