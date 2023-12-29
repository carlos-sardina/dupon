import { TODO_STATUS_MAP } from './maps';

export type Todo = {
  id: string;
  text: string;
  timestamp: number;
  status: keyof typeof TODO_STATUS_MAP;
};
