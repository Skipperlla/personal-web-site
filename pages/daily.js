import React from "react";
import { getNowPlaying, recentlyPlayed } from "../lib/Spotify";
import { NextSeo } from "next-seo";
import Left from "../components/Daily/Left";
import Right from "../components/Daily/Right";
import OlderSongs from "../components/Daily/OlderSongs";
import ResponsiveFollowMe from "../components/Index/ResponsiveFollowMe";
export default function Daily({ status, nowPlaying, RecentlyPlayed }) {
  return (
    <>
      <NextSeo
        title="Song Recommendations - Skipperlla.xyz"
        description="Song Recommendations - Skipperlla.xyz"
        canonical="https://skipperlla.xyz/daily"
      >
        {" "}
        <link rel="icon" href="/avatar.png" />
      </NextSeo>
      <div className="pt-12 ">
        <div className="flex flex-col grid  grid-cols-1 md:grid-cols-1">
          <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
            <h1></h1>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <Left
              artist={nowPlaying.item.album.artists[0].name}
              name={nowPlaying.item.name}
              spotifyURL={nowPlaying.item.external_urls.spotify}
              date={nowPlaying.timestamp}
              isPlaying={nowPlaying.is_playing}
            />
            <Right />
          </div>
        </div>
        <div className="pt-10">
          <OlderSongs RecentlyPlayed={RecentlyPlayed.items} status={status} />
        </div>
        <ResponsiveFollowMe />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const RecentlyPlayedFetch = await recentlyPlayed();
  const nowPlayingFetch = await getNowPlaying();

  const RecentlyPlayed = await RecentlyPlayedFetch.json();
  const nowPlaying = await nowPlayingFetch.json();

  const status = RecentlyPlayedFetch.status;
  return {
    props: {
      RecentlyPlayed,
      status,
      nowPlaying,
    },
  };
};
