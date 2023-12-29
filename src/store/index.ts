import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlices';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const appStore = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
