import { configureStore } from '@reduxjs/toolkit';
import characters from './reducers';
import { useDispatch } from 'react-redux'
const store = configureStore({
  reducer: {
    characters,
  },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export default store;