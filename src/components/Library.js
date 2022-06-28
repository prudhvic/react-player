import React from "react";
import { useMusicContext } from "../context/MusicContext";
import LibrarySong from "./LibrarySong";

const Library = () => {
  let { songs, isNavOpen } = useMusicContext();
  return (
    <main className={`library ${isNavOpen ? "active" : ""}`}>
      {songs.map((song) => (
        <LibrarySong song={song} key={song.id} />
      ))}
    </main>
  );
};

export default Library;
