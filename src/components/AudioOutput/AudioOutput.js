import React, { memo, useEffect, useRef } from "react";
import "./audioOutput.css";

const AudioOutput = (props) => {
  const { currentAudio, selectedAudioPath } = props;

  const { channel, sound } = currentAudio;

  const audioRef = useRef();

  const getAudioCode = () =>{
    if (channel === "ambience") {
      return `ambience ambience_${sound}`;
    }

    if (channel === "sfx") {
      return `sound sfx_${sound}`;
    }

    if (channel === "music") {
      return `music music_list["${sound}"]`;
    }
  };

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, [])

  return(
    <div className="audio-output">
      <div className="audio-output__field">
        <p className="audio-output__name">
          Звук:
        </p>
        <p className="audio-output__text">
          play {getAudioCode()}
        </p>
      </div>
      <audio
        className="audio-player"
        src={process.env.PUBLIC_URL + selectedAudioPath}
        ref={audioRef}
        controls
      />
    </div>
  );
};

export default memo(AudioOutput);
