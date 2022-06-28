import { createContext, useState, useEffect, useContext, useRef } from "react";
import chillHop from "../data";
let MusicContext = createContext();
export default function MusicContextProvider({ children }) {
  let [songs, setSongs] = useState(chillHop());
  let audioRef = useRef();
  let [isPlaying, setIsPlaying] = useState(false);
  let [currentSong, setCurrentSong] = useState(songs[0]);
  let [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  let [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <MusicContext.Provider
      value={{
        audioRef,
        songs,
        currentSong,
        isPlaying,
        setIsPlaying,
        setCurrentSong,
        songInfo,
        setSongInfo,
        setSongs,
        isNavOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
export let useMusicContext = () => useContext(MusicContext);
