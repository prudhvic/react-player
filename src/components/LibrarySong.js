import React from "react";
import { useMusicContext } from "../context/MusicContext";

const LibrarySong = ({ song }) => {
  let { setCurrentSong, isPlaying, setIsNavOpen } = useMusicContext();
  return (
    <div
      onClick={() => {
        setCurrentSong(song);
        setIsNavOpen(false);
      }}
      className={`library-song ${song.active ? "active" : ""}`}
    >
      <img
        className={song.active && isPlaying ? "rotate" : ""}
        src={song.cover}
        alt={song.name}
      />
      <div>
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
