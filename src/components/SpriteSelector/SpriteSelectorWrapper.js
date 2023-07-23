import React, { memo, useState } from "react";
import imageAssets from "../../vendor/imageAssets/imageAssets";
import SpriteSelector from "./SpriteSelector";
import "./spriteSelectorWrapper.css";
import SpriteOutput from "../SpriteOutput/SpriteOutput";

const SpriteSelectorWrapper = (props) => {
  const { currentSprite, changeSprite, resetSprite } = props;

  const [selectedSprite, setSelectedSprite] = useState({
    layer: "char",
    char: "",
    body: "",
    clothes: "",
    emo: "",
    distance: "",
  });

  const resetSelectedSprite = () => {
    setSelectedSprite({
      layer: "char",
      char: "",
      body: "",
      clothes: "",
      emo: "",
      distance: "",
    });
    resetSprite();
  };

  const getSpriteAssets = () => {
    if (selectedSprite.layer === "char") {
      return imageAssets.sprites;
    }

    if (selectedSprite.layer === "body") {
      return imageAssets.sprites[selectedSprite.char].normal;
    }

    if (selectedSprite.layer === "clothes") {
      return {
        emo: imageAssets.sprites[selectedSprite.char].normal[selectedSprite.body].emo,
        clothes: imageAssets.sprites[selectedSprite.char].normal[selectedSprite.body].clothes,
      }
    }
    if (selectedSprite.layer === "emo") {
      return imageAssets.sprites[selectedSprite.char].normal[selectedSprite.body].emo;
    }
  };

  return(
    <div className="selector__wrapper">
      <button type="button" className="selector__button" onClick={resetSelectedSprite}>Сбросить спрайт</button>
      <ul className="selector__list">
        <SpriteSelector
          setSelectedSprite={setSelectedSprite}
          selectedSprite={selectedSprite}
          spritesList={getSpriteAssets()}
          changeSprite={changeSprite}
        />
      </ul>
      {
        currentSprite.isFull && (
          <SpriteOutput currentSprite={currentSprite} />
        )
      }
    </div>
  );
};

export default memo(SpriteSelectorWrapper);
