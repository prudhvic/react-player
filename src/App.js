import "./App.css";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="grid">
        <Song />
        <Player />
      </div>
      <Library />
    </div>
  );
}

export default App;
