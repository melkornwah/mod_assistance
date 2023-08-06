import React, { memo } from "react";
import "./spriteOutput.css";

const SpriteOutput = (props) => {
  const { currentSprite } = props;
  const {
    char,
    body,
    clothes,
    emo,
    hasFar,
  } = currentSprite;

  const getSpriteCode = (isFar) => {
    const spriteCode = `blpi_${char} ${body.slice(-1)} ${clothes} ${emo}`;

    if (isFar) {
      if (char === "sk") {
        return `${spriteCode} glasses far`
      }

      return `${spriteCode} far`
    }

    if (char === "sk") {
      return `${spriteCode} glasses normal`
    }

    return `${spriteCode} normal`
  };

  return(
    <>
      {
        hasFar ? (
          <div className="sprite-output__container">
            <div className="sprite-output__field">
              <p className="sprite-output__distance">
                Far:
              </p>
              <p className="sprite-output__text">
                show {getSpriteCode(true)}
              </p>
            </div>
            <div className="sprite-output__field">
              <p className="sprite-output__distance">
                Normal:
              </p>
              <p className="sprite-output__text">
                show {getSpriteCode()}
              </p>
            </div>
          </div>
        ) : (
          <div className="sprite-output__container">
            <div className="sprite-output__field">
              <p className="sprite-output__distance">
                Normal:
              </p>
              <p className="sprite-output__text">
                show {getSpriteCode()}
              </p>
            </div>
          </div>
        )
      }
    </>
  );
};

export default memo(SpriteOutput);
