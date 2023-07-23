import React, { memo, useState } from "react";
import "./textTransform.css";
import { textToCode } from "../../vendor/codeHandlers/textToCode";

const TextTransform = (props) => {
  const { changeIsModalOpened, setCurrentCode } = props;

  const [currentText, setCurrentText] = useState("");

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__overlay" onClick={changeIsModalOpened} />
        <form className="modal__form">
          <textarea
            className="modal__text"
            title="Текст"
            placeholder="Введите текст"
            value={currentText}
            onChange={(evt) => {
              setCurrentText(evt.target.value);
            }}
          />
          <button
            className="modal__button"
            type="button"
            onClick={() => {
              setCurrentCode(textToCode(currentText));
              changeIsModalOpened();
            }}
          >
            Сгенерировать код
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(TextTransform);
