import { configureStore } from '@reduxjs/toolkit';
import characters from './reducers';

const store = configureStore({
  reducer: {
    characters,
  },

});
export default store;