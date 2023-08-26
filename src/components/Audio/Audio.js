import React, { memo } from "react";

const Audio = (props) => {
  const {audio, audio_code, selectedChannel, audioPath, setCurrentAudio} = props;

  const handleAudioSelect = () => {
    setCurrentAudio({
      channel: selectedChannel,
      sound: audio,
      code: audio_code,
      path: audioPath,
      isSelected: true,
    });
  };

  return (
    <div
      className={`audio ${selectedChannel === "sfx" ? "audio_sfx" : ""}`}
      onClick={handleAudioSelect}
    >
      <p
        className="audio__name"
      >
        {audio}
      </p>
    </div>
  )
};

export default memo(Audio);
