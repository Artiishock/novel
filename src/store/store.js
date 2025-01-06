import { createSlice, configureStore } from '@reduxjs/toolkit';
import { scenes } from '../Components/scenes'; // Предполагается, что у вас есть файл scenes.js

const initialState = {
  currentScene: 'start',
  currentChapter: '0',
  completedChoices: [],
  history: [], // Хранение истории текста сцен
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScene: (state, action) => {
      const { nextScene } = action.payload;

      // Сохраняем текст текущей сцены в историю
      const currentScene = scenes[state.currentScene];
      if (currentScene ) {
        state.history.push({
          text: currentScene.text, // Текст диалога из <p>
          person: currentScene.person,
        });
      }

       // Обновление главы при переходе на "nextChapter"
  if (nextScene === 'nextChapter') {
    const nextChapter = (parseInt(state.currentChapter) + 1).toString(); // Преобразование в строку
    if (scenes[nextChapter]) {
      state.currentChapter = nextChapter;
      state.currentScene = 'start';
    } else {
      console.error('Нет следующей главы.');
    }
  } else {
    state.currentScene = nextScene;
  }
      // Сохраняем выбор, если он не "дальше"
      if (!['дальше', 'Дальше'].includes(action.payload.text)) {
        state.completedChoices.push(action.payload.text);
      }
    },
  },
});

export const { setScene } = gameSlice.actions;

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export default store;