import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScene } from '../store/store';
import { scenes } from './scenes';
import "./style/visualNovel.css";


const VisualNovel = () => {
  const dispatch = useDispatch();
  const { currentScene, completedChoices } = useSelector((state) => state.game);

  const scene = scenes[currentScene];

  const handleChoice = (choice) => {
    dispatch(setScene({ scene: choice.nextScene, choice: choice.text }));
  };

   // Фильтруем варианты, которые уже были выбраны
   const availableOptions = scene.options.filter(
    (option) => !completedChoices.includes(option.text)
  );

  return (
    <div className='display'>
      <div className='dialog__box'>
        <h1>ГЛАВА 0</h1>
        <div>
          <h4>{scene.person}</h4>
          <p>{scene.text}</p>
          <div>
            {availableOptions.map((option, index) => (
              <button
                className='button__style'
                key={index}
                onClick={() => handleChoice(option)}
                >
                {option.text}
              </button>
            
            ))} 
          </div>
           {availableOptions.length === 0 && <p>Все варианты для этой сцены выбраны!</p>}
        </div>
      </div>
    </div>
  );
};

export default VisualNovel;
