import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import {
  addTodo as addTodoToStore,
  deleteTodo as deleteTodoFromStore,
  changeTodoStatus,
} from '../store/slices/todosSlices';
import { v4 as uuidv4 } from 'uuid';
import { TODO_STATUS_MAP } from '../maps';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSettings } from '.';

export const useTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { filter } = useSettings();

  const addTodo = () => {
    if (!newTodo) {
      toast.error('Please enter a todo');
      return;
    }

    if (newTodo.length < 5) {
      toast.warn('Todo must be at least 5 characters long', {
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
      });
      return;
    }

    if (newTodo.length >= 50) {
      toast.warn('Todo must be less than 50 characters long', {
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false,
      });
      return;
    }

    dispatch(
      addTodoToStore({
        id: uuidv4(),
        text: newTodo,
        timestamp: Math.floor(Date.now() / 1000),
        status: TODO_STATUS_MAP.pending.key as keyof typeof TODO_STATUS_MAP,
      }),
    );

    setNewTodo('');
  };

  const deleteTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      toast.error('Todo not found', { hideProgressBar: true });
      return;
    }

    dispatch(deleteTodoFromStore(id));
    toast.info('Todo deleted', { autoClose: 1250, hideProgressBar: true, closeButton: false });
  };

  const toggleTodoStatus = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }

    dispatch(changeTodoStatus({ id, status: todo.status === 'pending' ? 'done' : 'pending' }));
  };

  return {
    newTodo,
    updateNewTodo: setNewTodo,
    todos: filter ? todos.filter((todo) => todo.status === filter) : todos,
    addTodo,
    deleteTodo,
    toggleTodoStatus,
  };
};
