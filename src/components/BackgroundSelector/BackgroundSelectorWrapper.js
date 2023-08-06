import React, { memo, useState } from "react";
import "./backgroundSelectorWrapper.css";
import BackgroundSelector from "./BackgroundSelector";
import BackgroundOutput from "../BackgroundOutput/BackgroundOutput";

const BackgroundSelectorWrapper = (props) => {
  const {
    currentBackground,
    setCurrentBackground,
    resetBackground,
  } = props;

  const [backgroundSource, setBackgroundSource] = useState("");
  const [backgroundLocation, setBackgroundLocation] = useState("");

  const resetBackgoundSource = () => {
    setBackgroundSource("");
    setBackgroundLocation("");
    resetBackground();
  };

  return (
    <div className="bg-selector">
      <button
        type="button"
        className="bg-selector__reset"
        onClick={resetBackgoundSource}
      >
        Сбросить фон
      </button>
      {
        !backgroundSource && !backgroundLocation ? (
          <div className="bg-selector__container">
            <ul className="bg-selector__list">
              <li className="bg-selector__item">
                <button
                  className="bg-selector__button"
                  onClick={() => {
                    setBackgroundSource("original");
                  }}
                >
                  Оригинал
                </button>
              </li>
              <li className="bg-selector__item">
                <button
                  className="bg-selector__button"
                  onClick={() => {
                    setBackgroundSource("mod");
                  }}
                >
                  Мод
                </button>
              </li>
            </ul>
          </div>
        ) : !backgroundLocation ? (
          <div className="bg-selector__container">
            <ul className="bg-selector__list">
              <li className="bg-selector__item">
                <button
                  type="button"
                  className="bg-selector__button"
                  onClick={() => {
                    setBackgroundLocation("exterior");
                  }}
                >
                  Снаружи
                </button>
              </li>
              <li className="bg-selector__item">
                <button
                  type="button"
                  className="bg-selector__button"
                  onClick={() => {
                    setBackgroundLocation("interior");
                  }}
                >
                  Внутри
                </button>
              </li>
            </ul>
          </div>
        ) : null
      }
      {
        backgroundSource && backgroundLocation && (
          <BackgroundSelector
            backgroundSource={backgroundSource}
            backgroundLocation={backgroundLocation}
            setCurrentBackground={setCurrentBackground}
          />
        )
      }
      {
        currentBackground.isSelected && (
          <BackgroundOutput currentBackground={currentBackground} />
        )
      }
    </div>
  );
};

export default memo(BackgroundSelectorWrapper);
