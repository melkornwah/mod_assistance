import "./sprite.css";
import React, { memo } from "react";
import imageAssets from "../../vendor/imageAssets/imageAssets";

const Sprite = (props) => {
  const {
    character,
    body,
    clothes,
    emo,
    acc,
    distance,
    selectSprite,
  } = props;

  const characterAsset = imageAssets.sprites[character][distance][body];

  const characterAssets = {
    body: characterAsset.body,
    clothes: characterAsset.clothes[clothes],
    emo: characterAsset.emo[emo],
    acc: acc ? characterAsset.acc[acc] : null,
  };

  return (
    <div
      className="sprite"
      onClick={selectSprite && (() => {
        selectSprite({
          character,
          body,
          clothes,
          emo,
        });
      })}
    >
      <div className="sprite__wrapper">
        <img className="sprite__image" src={process.env.PUBLIC_URL + `/${characterAssets.body}`} alt="body" loading="lazy" />
        {
          characterAssets.clothes &&
          <img className="sprite__image" src={process.env.PUBLIC_URL + `/${characterAssets.clothes}`} alt="clothes" loading="lazy" />
        }
        {
          characterAssets.emo &&
          <img className="sprite__image" src={process.env.PUBLIC_URL + `/${characterAssets.emo}`} alt="emo" loading="lazy" />
        }
        {
          characterAssets.acc &&
          <img className="sprite__image" src={process.env.PUBLIC_URL + `/${characterAssets.acc}`} alt="acc" loading="lazy" />
        }
      </div>
    </div>
  );
};

export default memo(Sprite);
