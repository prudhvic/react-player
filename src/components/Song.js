import React from "react";
import { useMusicContext } from "../context/MusicContext";

const Song = () => {
  let { currentSong, isPlaying } = useMusicContext();
  return (
    <div className="song-container">
      <div className={`song ${isPlaying ? "active" : ""}`}>
        <img src={currentSong.cover} alt={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};

export default Song;
