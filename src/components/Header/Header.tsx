import { useTodo } from '../../hooks';
import { Button, Filters, Input } from '../index';
import { IconPlus } from '@tabler/icons-react';
import moment from 'moment';

export const Header = () => {
  const { newTodo, updateNewTodo, addTodo } = useTodo();

  return (
    <header className="flex justify-between items-center flex-col md:flex-row gap-y-4">
      <div className="flex items-center gap-x-10 flex-col lg:flex-row gap-y-4 md:items-start lg:items-center">
        <div className="text-white flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Dupon's To Do List</h1>
          <p>{moment().format('dddd[,] MMM Do YYYY')}</p>
        </div>
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <div className="w-[300px]">
            <Input placeholder="Create a new todo" value={newTodo} onChange={updateNewTodo} />
          </div>
          <Button type="submit" text="Create" icon={<IconPlus width="20px" />} />
        </form>
      </div>
      <Filters />
    </header>
  );
};
