import querystring from "query-string";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const Basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
// get spotify access token with user refresh_token
const getAccessToken = async () => {
 
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

const spotifyFetch = async (endpoint: string) => {
  const { access_token, token_type } = await getAccessToken();
  return fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
};
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  console.log(access_token);
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getNowPlaying = async () => {
  return spotifyFetch("/me/player/currently-playing");
};
