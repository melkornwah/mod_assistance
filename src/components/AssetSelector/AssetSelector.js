import React, { memo, useState } from "react";
import BackgroundSelectorWrapper from "../BackgroundSelector/BackgroundSelectorWrapper";
import SpriteSelectorWrapper from "../SpriteSelector/SpriteSelectorWrapper";
import AudioSelectorWrapper from "../audioSelector/AudioSelectorWrapper";
import "./assetSelector.css";

const AssetSelector = () => {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [currentBackground, setCurrentBackground] = useState({
    source: "",
    image: "",
    isSelected: false,
  });
  const [currentSprite, setCurrentSprite] = useState({
    char: "",
    body: "",
    clothes: "",
    emo: "",
    acc: "",
    distance: "",
    hasFar: false,
    isFull: false,
  });
  
  const changeSprite = (char, body, clothes, emo, acc, hasFar, isFull) => {
    setCurrentSprite({
      char: char,
      body: body,
      clothes: clothes,
      emo: emo,
      acc: acc,
      distance: "normal",
      hasFar: hasFar,
      isFull: isFull,
    });
  };

  const resetSprite = () => {
    setCurrentSprite({
      char: "",
      body: "",
      clothes: "",
      emo: "",
      acc: "",
      distance: "",
      hasFar: false,
      isFull: false,
    });
  };

  const resetBackground = () => {
    setCurrentBackground({
      source: "",
      image: "",
      isSelected: false,
    });
  };

  return (
    <div className="asset-selector">
        <button
          className="reset-selector"
          type="button"
          onClick={() => {
            setSelectedAsset("");
          }}
        >
          Сбросить селектор
        </button>
      {
        !selectedAsset ? (
          <ul className="asset-selector__list">
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
                onClick={() => {
                  setSelectedAsset("background")
                }}
              >
                Фоны
              </button>
            </li>
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
                onClick={() => {
                  setSelectedAsset("sprite")
                }}
              >
                Спрайты
              </button>
            </li>
            <li className="asset-selector__item">
              <button
                type="button"
                className="asset-selector__button"
                onClick={() => {
                  setSelectedAsset("audio")
                }}
              >
                Аудио
              </button>
            </li>
          </ul>
        ) : selectedAsset === "background" ? (
          <BackgroundSelectorWrapper
            currentBackground={currentBackground}
            setCurrentBackground={setCurrentBackground}
            resetBackground={resetBackground}
          />
        ) : selectedAsset === "sprite" ? (
          <SpriteSelectorWrapper
            currentSprite={currentSprite}
            changeSprite={changeSprite}
            resetSprite={resetSprite}
          />
        ) : selectedAsset === "audio" ? (
          <AudioSelectorWrapper />
        ) : null
      }
    </div>
  );
};

export default memo(AssetSelector);
