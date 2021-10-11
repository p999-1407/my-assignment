import React, { useState } from "react";
import "./styles.css";
import Waveform from "./Waveform";
import PlayList from "./PlayList";
import Other from "./Other";

const geturl="https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";
const tracks = [
  {
    id: 0,
    title: "my track",
    url:geturl

  }
  
];

export default function Newpage() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="App">
      <Waveform url={selectedTrack.url} />
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
     
    </div>
  );
}
