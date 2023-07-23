import React, { memo } from "react";
import Sprite from "../Sprite/Sprite";
import "./spriteSelector.css"
import imageAssets from "../../vendor/imageAssets/imageAssets";

const SpriteSelector = (props) => {
  const { spritesList, selectedSprite, setSelectedSprite, changeSprite } = props;

  const checkIfHasFar = (char) => {
    const charFar = imageAssets.sprites[char].far;

    return typeof charFar === "object";
  };

  const selectSprite = (sprite) => {
    if (selectedSprite.layer === "char") {
      const newSelectedSprite = {
        ...selectedSprite,
        layer: "body",
        char: sprite.character,
      }

      setSelectedSprite(newSelectedSprite);
    }

    if (selectedSprite.layer === "body") {
      const newSelectedSprite = {
        ...selectedSprite,
        layer: "clothes",
        body: sprite.body,
      }

      setSelectedSprite(newSelectedSprite);
    }

    if (selectedSprite.layer === "clothes") {
      const newSelectedSprite = {
        ...selectedSprite,
        layer: "emo", 
        clothes: sprite.clothes,
      }

      setSelectedSprite(newSelectedSprite);
    }

    if (selectedSprite.layer === "emo") {
      const newSelectedSprite = {
        ...selectedSprite,
        emo: sprite.emo,
      }

      const { char, body, clothes, emo } = newSelectedSprite;

      const acc = newSelectedSprite.acc ? newSelectedSprite.acc : "";

      changeSprite(char, body, clothes, emo, acc, checkIfHasFar(char), true );
      setSelectedSprite(newSelectedSprite);
    }
  };

  const getSpriteAssets = (sprite, layer) => {
    if (layer === "body") {
      if (selectedSprite.layer !== "char") {
        return sprite;
      }

      return Object.keys(spritesList[sprite].normal)[0];
    }

    if (layer === "clothes") {
      if (selectedSprite.layer === "clothes") {
        return sprite;
      }

      if (selectedSprite.char === "cs") {
        return "labcoat";
      }

      if (selectedSprite.char === "sl") {
        return "turtleneck";
      }

      return "pioneer";
    }

    if (layer === "emo") {
      if (selectedSprite.layer === "emo") {
        return sprite;
      }

      if (selectedSprite.layer === "clothes") {
        return Object.keys(spritesList.emo)[0];
      }

      if (selectedSprite.layer === "body") {
        return Object.keys(spritesList[sprite].emo)[0];
      }

      const firstBody = Object.keys(spritesList[sprite].normal)[0];

      return Object.keys(spritesList[sprite].normal[firstBody].emo)[0];
    }
  };

  return(
    <>
      {
        Object.keys(selectedSprite.layer === "clothes" ? spritesList.clothes : spritesList).map((sprite) => (
          <li
            key={`${sprite}`}
            className={
              `selector__item
              ${selectedSprite.layer === "char" && "selector__item_small"}
              ${selectedSprite.layer === "emo" && "selector__item_big"}`
            }
          >
            {
              selectedSprite.layer === "char" ?
              <Sprite
                character={sprite}
                distance={"normal"}
                body={getSpriteAssets(sprite, "body")}
                clothes={getSpriteAssets(sprite, "clothes")}
                emo={getSpriteAssets(sprite, "emo")}
                selectSprite={selectSprite}
              />
              : selectedSprite.layer === "body" ?
              <Sprite
                character={selectedSprite.char}
                distance={"normal"}
                body={getSpriteAssets(sprite, "body")}
                clothes={getSpriteAssets(sprite, "clothes")}
                emo={getSpriteAssets(sprite, "emo")}
                selectSprite={selectSprite}
              />
              : selectedSprite.layer === "clothes" ?
              <Sprite
                character={selectedSprite.char}
                distance={"normal"}
                body={selectedSprite.body}
                clothes={getSpriteAssets(sprite, "clothes")}
                emo={getSpriteAssets(selectSprite.layer === "clothes" ? spritesList.emo : spritesList, "emo")}
                selectSprite={selectSprite}
              />
              :
              <Sprite
                character={selectedSprite.char}
                distance={"normal"}
                body={selectedSprite.body}
                clothes={selectedSprite.clothes}
                emo={getSpriteAssets(sprite, "emo")}
                selectSprite={selectSprite}
              />
            }
          </li>
        ))
      }
    </>
  );
};

export default memo(SpriteSelector);
