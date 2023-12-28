import { Button, Filters, Input } from '../index';
import { IconPlus } from '@tabler/icons-react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-x-10">
        <div className="text-white flex flex-col gap-1">
          <h1 className="text-3xl font-bold">My To Do List</h1>
          <p>Wednesday, August 23</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[300px]">
            <Input placeholder="Create a new todo" value="" onChange={() => null} />
          </div>
          <Button
            text="Create"
            icon={<IconPlus width="20px" />}
            textColor="white"
            backgroundColor="purpleStrong"
            hoverBackgroundColor="purpleStronger"
          />
        </div>
      </div>
      <Filters />
    </header>
  );
};
