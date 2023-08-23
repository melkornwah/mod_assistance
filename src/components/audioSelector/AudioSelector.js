import React, { memo } from "react";
import audioAssets from "../../vendor/audioAssets/audioAssets";
import Audio from "../Audio/Audio";

const AudioSelector = (props) => {
  const { selectedChannel, setCurrentAudio } = props;

  const audioList = Object.keys(audioAssets[selectedChannel]);

  return (
    <ul className="audio-selector__list">
      {
        audioList.map((item) => (
          <li
            className={`audio-selector__item ${selectedChannel === "sfx" ? "audio-selector__item_sfx" : ""}`}
            key={item}
          >
            <Audio
              audio={audioAssets[selectedChannel][item].name}
              audio_code={audioAssets[selectedChannel][item].code}
              selectedChannel={selectedChannel}
              audioPath={audioAssets[selectedChannel][item].path}
              setCurrentAudio={setCurrentAudio}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default memo(AudioSelector);
