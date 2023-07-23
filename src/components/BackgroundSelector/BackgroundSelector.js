import React, { memo } from "react";
import imageAssets from "../../vendor/imageAssets/imageAssets";
import Background from "../Background/Background";
import "./backgroundSelector.css";

const BackgroundSelector = (props) => {
  const { backgroundSource, backgroundLocation, setCurrentBackground } = props;

  const backgroundList = Object.keys(imageAssets.background[backgroundSource][backgroundLocation]);

  return (
    <ul className="background__list">
      {
        backgroundList.map((background) => (
          <li className="background" key={background}>
            <Background
              source={backgroundSource}
              location={backgroundLocation}
              image={background}
              setCurrentBackground={setCurrentBackground}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default memo(BackgroundSelector);
