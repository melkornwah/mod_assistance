import React, { memo } from "react";
import AssetSelector from "../AssetSelector/AssetSelector";

const Editor = (props) => {
  const {
    currentCode,
    setCurrentCode,
    changeIsModalOpened,
  } = props;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentCode);
  };

  return (
    <div className="editor">
      <div className="editor__input">
        <button
          className="editor__button"
          type="button"
          onClick={changeIsModalOpened}
        >
          Загрузить код
        </button>
        <form className="input-form">
          <textarea
            className="input-field"
            value={currentCode}
            title="Код"
            placeholder="Введите код"
            onChange={(evt) => {
              setCurrentCode(evt.target.value);
            }}
          />
          <button
            className="editor__button"
            type="button"
            onClick={copyToClipboard}
          >
            Скопировать
          </button>
        </form>
      </div>
      <div className="selector-list">
        <div className="selector">
          <AssetSelector />
        </div>
      </div>
    </div>
  );
};

export default memo(Editor);
