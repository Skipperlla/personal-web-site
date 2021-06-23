import React from "react";

import { NextSeo } from "next-seo";
import Left from "../components/daily/Left";
import Right from "../components/daily/Right";
import OlderSongs from "../components/daily/OlderSongs";
export default function Daily({
  currentlyPlaying,
  RecentlyPlayed,
  MyPlayLists,
}) {
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
              artist={currentlyPlaying.artist}
              name={currentlyPlaying.name}
              spotifyURL={currentlyPlaying.spotifyURL}
              date={currentlyPlaying.timestamp}
              isPlaying={currentlyPlaying.isPlaying}
            />
            <Right MyPlayLists={MyPlayLists} />
          </div>
        </div>
        <div className="pt-10">
          <OlderSongs RecentlyPlayed={RecentlyPlayed} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const currentlyPlayingFetch = await fetch(
    `http://localhost:3000/api/nowPlaying`
  );
  const RecentlyPlayedFetch = await fetch(
    `http://localhost:3000/api/recentlyPlayed`
  );
  const MyPlayListsFetch = await fetch(`http://localhost:3000/api/myPlayLists`);
  const currentlyPlaying = await currentlyPlayingFetch.json();
  const RecentlyPlayed = await RecentlyPlayedFetch.json();
  const MyPlayLists = await MyPlayListsFetch.json();
  return { props: { currentlyPlaying, RecentlyPlayed, MyPlayLists } };
};
