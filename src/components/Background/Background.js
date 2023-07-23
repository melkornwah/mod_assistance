import React, { memo } from "react";
import imageAssets from "../../vendor/imageAssets/imageAssets";
import "./background.css";

const Background = (props) => {
  const { source, location, image, setCurrentBackground } = props;

  const imageAsset = imageAssets.background[source][location][image];

  return (
    <img
      onClick={() => {
        setCurrentBackground({
          source: source,
          image: image,
          isSelected: true,
        })
      }}
      className="background"
      src={imageAsset}
      alt={image}
      loading="lazy"
    />
  );
};

export default memo(Background);
