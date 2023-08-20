import React, { memo, useEffect, useState } from "react";

const BackgroundOutput = (props) => {
  const { currentBackground } = props;

  const { source, image } = currentBackground;

  const [backgroundCode, setBackgroundCode] = useState("");

  const getBackgroundCode = () =>{
    if (source === "original") {
      setBackgroundCode(`scene bg ${image}`);
    }

    setBackgroundCode(`scene blpi_bg ${image}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(backgroundCode);
  };

  useEffect(() => {
    getBackgroundCode();
  }, [currentBackground]);

  return(
    <div className="code-output">
      <div className="code-output__field">
        <p className="code-output__name">
          Фон:
        </p>
        <p className="code-output__text">
          {backgroundCode}
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
  );
};

export default memo(BackgroundOutput);
