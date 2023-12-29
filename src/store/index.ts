import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlices';
import settingsReducer from './slices/settingsSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const appStore = configureStore({
  reducer: {
    todos: todosReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
