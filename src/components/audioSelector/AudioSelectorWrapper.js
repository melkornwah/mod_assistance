import React, { memo, useEffect, useState } from "react";
import AudioSelector from "./AudioSelector";
import AudioOutput from "../AudioOutput/AudioOutput";
import audioAssets from "../../vendor/audioAssets/audioAssets";

const AudioSelectorWrapper = () => {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [currentAudio, setCurrentAudio] = useState({
    channel: "",
    sound: "",
    code: "",
    isSelected: false,
  });
  const [selectedAudioPath, setSelectedAudioPath] = useState("");

  useEffect(() => {
    const { channel, code, isSelected } = currentAudio;

    if (isSelected) {
      setSelectedAudioPath(audioAssets[channel][code].path);
    }
  }, [currentAudio]);

  return(
    <div className="asset-selector">
      <button
        type="button"
        className="reset-selector"
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
          <ul className="asset-selector-wrapper__list">
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
                onClick={() => {
                  setSelectedChannel("ambience")
                }}
              >
                Эмбиенты
              </button>
            </li>
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
                onClick={() => {
                  setSelectedChannel("sfx")
                }}
              >
                SFX
              </button>
            </li>
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
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
