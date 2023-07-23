import React, { memo } from "react";
import "./audioOutput.css";

const AudioOutput = (props) => {
  const { currentAudio } = props;

  const { channel, sound } = currentAudio;

  const getAudioCode = () =>{
    if (channel === "ambience") {
      return `ambience ${sound}`;
    }

    if (channel === "sfx") {
      return `sound ${sound}`;
    }

    if (channel === "music") {
      return `music music_list["${sound}"]`;
    }
  };

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
    </div>
  );
};

export default memo(AudioOutput);
