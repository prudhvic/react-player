import React, { useState } from "react";
import { BsFileMusicFill } from "react-icons/bs";
import { useMusicContext } from "../context/MusicContext";
const Navbar = () => {
  let { setIsNavOpen } = useMusicContext();
  let [src, setSrc] = useState();

  return (
    <header>
      <h1>Musify</h1>
      <nav>
        <h2 onClick={() => setIsNavOpen((prev) => !prev)}>
          <BsFileMusicFill />
          Music
        </h2>
      </nav>
    </header>
  );
};

export default Navbar;
