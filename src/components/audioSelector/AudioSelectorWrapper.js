import React, { memo, useEffect, useState } from "react";
import AudioSelector from "./AudioSelector";
import AudioOutput from "../AudioOutput/AudioOutput";
import audioAssets from "../../vendor/audioAssets/audioAssets";
import "./audioSelectorWrapper.css";

const AudioSelectorWrapper = () => {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [currentAudio, setCurrentAudio] = useState({
    channel: "",
    sound: "",
    isSelected: false,
  });
  const [selectedAudioPath, setSelectedAudioPath] = useState("");

  useEffect(() => {
    const { channel, sound, isSelected } = currentAudio;

    if (isSelected) {
      setSelectedAudioPath(audioAssets[channel][sound]);
    }
  }, [currentAudio]);

  return(
    <div className="audio-selector">
      <button
        type="button"
        className="audio-selector__reset"
        onClick={() => {
          setSelectedChannel("");
          setCurrentAudio({
            channel: "",
            sound: "",
            isSelected: false,
          });
        }}
      >
        Сбросить звуки
      </button>
      {
        !selectedChannel ? (
          <ul className="audio-selector-wrapper__list">
            <li className="audio-selector-wrapper__item">
              <button
                type="button"
                className="audio-selector-wrapper__button"
                onClick={() => {
                  setSelectedChannel("ambience")
                }}
              >
                Эмбиенты
              </button>
            </li>
            <li className="audio-selector-wrapper__item">
              <button
                type="button"
                className="audio-selector-wrapper__button"
                onClick={() => {
                  setSelectedChannel("sfx")
                }}
              >
                SFX
              </button>
            </li>
            <li className="audio-selector-wrapper__item">
              <button
                type="button"
                className="audio-selector-wrapper__button"
                onClick={() => {
                  setSelectedChannel("music")
                }}
              >
                Музыка
              </button>
            </li>
          </ul>
        ) : (
          <AudioSelector
            selectedChannel={selectedChannel}
            setCurrentAudio={setCurrentAudio}
          />
        )
      }
      {
        currentAudio.isSelected && (
          <AudioOutput
            currentAudio={currentAudio}
            selectedAudioPath={selectedAudioPath}
          />
        )
      }
    </div>
  )
};

export default memo(AudioSelectorWrapper);
