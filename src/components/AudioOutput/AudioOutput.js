import React, { memo, useEffect, useRef, useState } from "react";

const getAudioCode = (channel, sound) => {
  if (channel === "music") {
    return `music_list["${sound}"]`;
  }

  return `${channel}_${sound}`;
};

const AudioOutput = (props) => {
  const { currentAudio, selectedAudioPath } = props;

  const { channel, code } = currentAudio;

  const [audioCode, setAudioCode] = useState("");

  const audioRef = useRef();

  const getFormattedAudioCode = () =>{
    const formattedCode = `play ${channel} ${getAudioCode(channel, code)}`;

    setAudioCode(formattedCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(audioCode);
  };

  useEffect(() => {
    getFormattedAudioCode();

    audioRef.current.volume = 0.1;
  }, [currentAudio]);

  return(
    <div className="audio-output">
      <div className="code-output__container">
        <div className="code-output__field">
          <p className="code-output__name">
            Звук:
          </p>
          <p className="code-output__text">
            {audioCode}
          </p>
        </div>
        <button
          className="code-output__button"
          type="button"
          onClick={copyToClipboard}
        >
          Скопировать
        </button>
      </div>
      <audio
        className="audio-player"
        src={process.env.PUBLIC_URL + selectedAudioPath}
        ref={audioRef}
        autoPlay
        controls
      />
    </div>
  );
};

export default memo(AudioOutput);
