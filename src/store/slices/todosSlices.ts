import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';
import { TODO_STATUS_MAP } from '../../maps';

const localStorageKey = 'todos';
const initialState: Todo[] = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      localStorage.setItem(localStorageKey, JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      localStorage.setItem(localStorageKey, JSON.stringify(state.filter((todo) => todo.id !== action.payload)));
      return state.filter((todo) => todo.id !== action.payload);
    },
    changeTodoStatus: (state, action: PayloadAction<{ id: string; status: keyof typeof TODO_STATUS_MAP }>) => {
      const { id, status } = action.payload;
      const todoIndex = state.findIndex((todo) => todo.id === id);
      if (todoIndex > -1) {
        state[todoIndex].status = status;
        localStorage.setItem(localStorageKey, JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, deleteTodo, changeTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;
