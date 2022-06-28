import React, { useEffect } from "react";
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsFillSkipEndCircleFill,
  BsFillSkipStartCircleFill,
} from "react-icons/bs";
import { useMusicContext } from "../context/MusicContext";
const Player = () => {
  let {
    isPlaying,
    audioRef,
    setSongs,
    setIsPlaying,
    songInfo,
    setSongInfo,
    songs,
    setCurrentSong,
    currentSong,
  } = useMusicContext();
  let toggleSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying((prev) => !prev);
    } else {
      audioRef.current.play();
      setIsPlaying((prev) => !prev);
    }
  };
  let TimeUpdatehandler = (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    setSongInfo((prev) => ({ ...prev, currentTime, duration }));
  };
  let formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  let dragHandler = (e) => {
    let currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo((prev) => ({ ...prev, currentTime }));
  };

  let updateSong = async (option) => {
    let currentIndex = songs.findIndex((song) => currentSong.id === song.id);
    console.log(currentIndex);
    let activeSong;
    if (option === "+") {
      activeSong = songs[(currentIndex + 1) % songs.length];
    } else {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      activeSong = songs[(currentIndex - 1) % songs.length];
    }
    console.log(activeSong);
    await setCurrentSong(activeSong);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  useEffect(() => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === currentSong.id
          ? { ...song, active: true }
          : { ...song, active: false }
      )
    );
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);
  return (
    <div className="player">
      <div className="time-controls">
        <h3 className="current-Time">{formatTime(songInfo.currentTime)}</h3>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          onChange={dragHandler}
          value={songInfo.currentTime}
        />
        <h3 className="duration">
          {formatTime(songInfo.duration ? songInfo.duration : 0)}
        </h3>
      </div>
      <div className="player-controls">
        <button onClick={() => updateSong("-")}>
          <BsFillSkipStartCircleFill />
        </button>
        <button onClick={toggleSong}>
          {isPlaying ? <BsPauseCircleFill /> : <BsFillPlayCircleFill />}
        </button>
        <button onClick={() => updateSong("+")}>
          <BsFillSkipEndCircleFill />
        </button>
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={TimeUpdatehandler}
        onLoadedMetadata={TimeUpdatehandler}
      />
    </div>
  );
};

export default Player;
