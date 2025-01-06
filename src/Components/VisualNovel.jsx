import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScene } from '../store/store';
import { scenes } from './scenes';
import "./style/visualNovel.css";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoPauseSharp } from "react-icons/io5";
import { RiPlayFill } from "react-icons/ri";



const VisualNovel = () => {
  const dispatch = useDispatch();
  const { currentScene, completedChoices, history, currentChapter } = useSelector((state) => state.game);
  const [showHistory, setShowHistory] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const hoverSoundRef = useRef(null);

  // Проверяем текущую главу и сцену
  const scene = scenes[currentChapter]?.[currentScene];

  if (!scene) {
    return <div>Ошибка: текущая сцена не найдена.</div>;
  }

  
  // Фильтруем доступные опции
  const availableOptions = scene.options.filter(
    (option) =>
      option.text === 'дальше' || // Всегда показываем кнопки "дальше"
      !completedChoices.includes(option.text)
  );

  const handleChoice = (option) => {
    dispatch(setScene(option));
  };

  const handleMouseEnter = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play();
    }
  };

  return (
    <div className="display">
          <div className='App'
           style={{
            backgroundImage: `url(${scene.background})`, // Установка фона в зависимости от текущей сцены
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          > 
        <div>
           {scene.evaImg && (
              <img
                src={scene.evaImg}
                alt="Ева"
                className="Eva"
              />
            )}
            {scene.personImg && (
              <img
                src={scene.personImg}
                alt={scene.person}
                className="person"
              />
            )}
          </div>
          </div>
      <div className="dialog__box" 
      style={{
                  backgroundImage: `url(${scene.backgrounddialog})`, // Установка фона в зависимости от текущей сцены



                  backgroundSize: 'cover',
                  // backgroundPosition: 'center',
                }}
                >
        <div>
          <h1>ГЛАВА {currentChapter}</h1>

          {/* Кнопка для показа истории */}
          <button
            className="show-history-button"
            onClick={() => setShowHistory(true)}
            onMouseEnter={handleMouseEnter}
          >
            <RiChatHistoryFill />
          </button>
          <button
            className="show-history-button"
            onClick={() => setIsMuted(!isMuted)}
            onMouseEnter={handleMouseEnter}
          >
            {isMuted ? <RiPlayFill /> : <IoPauseSharp />}
          </button>

          {/* История диалогов */}
          {showHistory && (
            <div className="history-modal">
              <h3>История диалога</h3>
              <ul>
                {history.map((entry, index) => (
                  <li key={index}>
                    <strong>{entry.person}:</strong> {entry.text}
                  </li>
                ))}
              </ul>
              <button
                className="close-history-button"
                onClick={() => setShowHistory(false)}
                onMouseEnter={handleMouseEnter}
              >
                Закрыть
              </button>
            </div>
          )}

          {/* Затенение фона */}
          {showHistory && (
            <div
              className="modal-overlay"
              onClick={() => setShowHistory(false)}
            />
          )}
        </div>

        {/* Диалог */}
        <div>
          <h4>{scene.person}</h4>
          <p>{scene.text}</p>
          <div>
            {availableOptions.map((option, index) => (
              <button
                className="button__style"
                key={index}
                onClick={() => handleChoice(option)}
                onMouseEnter={handleMouseEnter}
              >
                {option.text}
              </button>
            ))}
          </div>

          {/* Если опций нет */}
          {availableOptions.length === 0 && (
            <p>Все варианты для этой сцены выбраны!</p>
          )}
        </div>

        {/* Фоновая музыка */}
        <audio autoPlay loop muted={isMuted}>
          <source src={scene.music} type="audio/mpeg" />
        </audio>
      </div>

      {/* Звук наведения */}
      <audio ref={hoverSoundRef} src="/sound/hover.mp3" />
    </div>
  );
};

export default VisualNovel;
