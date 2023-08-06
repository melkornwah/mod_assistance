import React, { memo } from "react";
import "./audio.css";

const Audio = (props) => {
  const {audio, selectedChannel, audioPath, setCurrentAudio} = props;

  return (
    <div className="audio">
      <p
        className="audio__name"
        onClick={() => {
          setCurrentAudio({
            channel: selectedChannel,
            sound: audio,
            path: audioPath,
            isSelected: true,
          });
        }}
      >
        {audio}
      </p>
    </div>
  )
};

export default memo(Audio);
