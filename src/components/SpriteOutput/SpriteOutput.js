import React, { memo, useEffect, useState } from "react";

const SpriteOutput = (props) => {
  const { currentSprite } = props;
  const {
    char,
    body,
    clothes,
    emo,
    hasFar,
  } = currentSprite;

  const [spriteCode, setSpriteCode] = useState({
    far: "",
    normal: "",
  });

  const getSpriteCode = (code) => {
    return {
      far: `show ${code} far`,
      normal: `show ${code} normal`,
    };
  };

  const setFormattedSpriteCode = () => {
    const spriteCode = `blpi_${char} ${body.slice(-1)} ${clothes} ${emo}`;
    const formattedCode = getSpriteCode(`${spriteCode}${char === "sk" ? " glasses" : ""}`);

    setSpriteCode(formattedCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(spriteCode);
  };

  useEffect(() => {
    setFormattedSpriteCode();
  }, [currentSprite]);

  return(
    <>
      {
        hasFar ? (
          <div className="sprite-output">
            <div className="code-output">
              <div className="code-output__field">
                <p className="code-output__name">
                  Far:
                </p>
                <p className="code-output__text">
                  {spriteCode.far}
                </p>
              </div>
              <button
                className="code-output__button"
                type="button"
                onClick={copyToClipboard}
              >
                Скопировать
              </button>
            </div>
            <div className="code-output">
              <div className="code-output__field">
                <p className="code-output__name">
                  Normal:
                </p>
                <p className="code-output__text">
                  {spriteCode.normal}
                </p>
              </div>
              <button
                className="code-output__button"
                type="button"
                onClick={copyToClipboard}
              >
                Скопировать
              </button>
            </div>
          </div>
        ) : (
          <div className="code-output">
            <div className="code-output__field">
              <p className="code-output__name">
                Normal:
              </p>
              <p className="code-output__text">
                {spriteCode.normal}
              </p>
            </div>
            <button
              className="code-output__button"
              type="button"
              onClick={copyToClipboard}
            >
              Скопировать
            </button>
          </div>
        )
      }
    </>
  );
};

export default memo(SpriteOutput);
