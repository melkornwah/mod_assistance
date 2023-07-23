import { farSpritesPath } from "../pathConstants";
import { normalSpritesPath } from "../pathConstants";

const cs = {
  far: {
    body_1: {
      body: `${farSpritesPath}/cs/1/body.png`,
      clothes: {
        labcoat: `${farSpritesPath}/cs/1/clothes/labcoat.png`,
      },
      emo: {
        normal: `${farSpritesPath}/cs/1/emo/normal.png`,
        shy: `${farSpritesPath}/cs/1/emo/shy.png`,
        smile: `${farSpritesPath}/cs/1/emo/smile.png`,
      },
      acc: {
        glasses: `${farSpritesPath}/cs/1/acc/glasses.png`,
        stethoscope: `${farSpritesPath}/cs/1/acc/stethoscope.png`,
      },
    },
  },
  normal: {
    body_1: {
      body: `${normalSpritesPath}/cs/1/body.png`,
      clothes: {
        labcoat: `${normalSpritesPath}/cs/1/clothes/labcoat.png`,
      },
      emo: {
        normal: `${normalSpritesPath}/cs/1/emo/normal.png`,
        sad: `${normalSpritesPath}/cs/1/emo/sad.png`,
        shy: `${normalSpritesPath}/cs/1/emo/shy.png`,
        smile: `${normalSpritesPath}/cs/1/emo/smile.png`,
      },
      acc: {
        glasses: `${normalSpritesPath}/cs/1/acc/glasses.png`,
        stethoscope: `${normalSpritesPath}/cs/1/acc/stethoscope.png`,
      },
    },
  },
};

export default cs;
