import React, { memo } from "react";
import audioAssets from "../../vendor/audioAssets/audioAssets";
import Audio from "../Audio/Audio";
import "./audioSelector.css";

const AudioSelector = (props) => {
  const { selectedChannel, setCurrentAudio } = props;

  const audioList = Object.keys(audioAssets[selectedChannel]);

  return (
    <ul className="audio-selector__list">
      {
        audioList.map((item) => (
          <li className="audio-selector__item" key={item}>
            <Audio
              audio={item}
              selectedChannel={selectedChannel}
              audioPath={audioAssets[selectedChannel][item]}
              setCurrentAudio={setCurrentAudio}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default memo(AudioSelector);
