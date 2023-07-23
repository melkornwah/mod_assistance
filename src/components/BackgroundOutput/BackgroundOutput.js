import React, { memo } from "react";
import "./backgroundOutput.css";

const BackgroundOutput = (props) => {
  const { currentBackground } = props;

  const { source, image } = currentBackground;

  const getBackgroundCode = () =>{
    if (source === "original") {
      return `bg ${image}`;
    }

    return `blpi_bg ${image}`;
  };

  return(
    <div className="background-output">
      <div className="background-output__field">
        <p className="background-output__name">
          Фон:
        </p>
        <p className="background-output__text">
          scene {getBackgroundCode()}
        </p>
      </div>
    </div>
  );
};

export default memo(BackgroundOutput);
