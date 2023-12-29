import { IconTrash } from '@tabler/icons-react';
import { Check } from '../index';
import { Todo as TTodo } from '../../types';
import { TODO_STATUS_MAP } from '../../maps';
import moment from 'moment';

type TodoProps = {
  todo: TTodo;
  onRemove: () => void;
  onCheckClick: () => void;
};

export const Todo = ({ todo, onRemove, onCheckClick }: TodoProps) => {
  return (
    <li className="flex bg-gray py-3 px-4 rounded-md items-center min-w-full justify-between">
      <div className="items-center flex gap-3">
        <Check isChecked={todo.status === TODO_STATUS_MAP.done.key} onChange={onCheckClick} />
        <div>
          <h2 className="mb-[3px] text-lg">{todo.text}</h2>
          <p className="text-grayStrong text-xs">{moment.unix(todo.timestamp).fromNow()}</p>
        </div>
      </div>
      <button className="p-2 hover:bg-[rgba(0,0,0,0.1)] rounded-md ml-1" onClick={onRemove} data-testid="remove-button">
        <IconTrash color="red" width="20px" />
      </button>
    </li>
  );
};
