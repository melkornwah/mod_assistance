import { useState, memo } from 'react';
import './App.css';
import Editor from './Editor/Editor';
import TextTransform from './TextTransform/TextTransform';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const changeIsModalOpened = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <div className="App">
      <Editor
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        changeIsModalOpened={changeIsModalOpened}
      />
      {
        isModalOpened && (
          <TextTransform
            changeIsModalOpened={changeIsModalOpened}
            setCurrentCode={setCurrentCode}
          />
        )
      }
    </div>
  );
}

export default memo(App);
