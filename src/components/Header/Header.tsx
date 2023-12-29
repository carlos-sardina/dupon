import { Button, Filters, Input } from '../index';
import { IconPlus } from '@tabler/icons-react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center flex-col md:flex-row gap-y-4">
      <div className="flex items-center gap-x-10 flex-col lg:flex-row gap-y-4 md:items-start lg:items-center">
        <div className="text-white flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Dupon's To Do List</h1>
          <p>Wednesday, August 23</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[300px]">
            <Input placeholder="Create a new todo" value="" onChange={() => null} />
          </div>
          <Button text="Create" icon={<IconPlus width="20px" />} />
        </div>
      </div>
      <Filters />
    </header>
  );
};
