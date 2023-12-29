import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TODO_STATUS_MAP } from '../../maps';

const localStorageKey = 'settings';
const initialState: { filter: keyof typeof TODO_STATUS_MAP | null } = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey)!)
  : { filter: null };

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<keyof typeof TODO_STATUS_MAP | null>) => {
      localStorage.setItem(localStorageKey, JSON.stringify({ filter: action.payload }));
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = settingsSlice.actions;

export default settingsSlice.reducer;
