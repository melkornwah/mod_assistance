import React, { memo, useEffect, useRef } from "react";
import "./audio.css";

const Audio = (props) => {
  const {audio, selectedChannel, audioPath, setCurrentAudio} = props;

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, [])

  return (
    <div className="audio">
      <p
        className="audio__name"
        onClick={() => {
          setCurrentAudio({
            channel: selectedChannel,
            sound: audio,
            isSelected: true,
          });
        }}
      >
        {audio}
      </p>
      <audio
        src={audioPath}
        ref={audioRef}
        controls
      />
    </div>
  )
};

export default memo(Audio);
