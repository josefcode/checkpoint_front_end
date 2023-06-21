import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from './reducers';

const store = configureStore({
  reducer: {
    episode: episodeReducer,
  },
});

export default store;