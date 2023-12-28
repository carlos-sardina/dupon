import { IconTrash } from '@tabler/icons-react';
import { Check } from '../index';

export const Todo = () => {
  return (
    <li className="flex bg-gray py-2 px-4 rounded-md items-center min-w-[250px] max-w-[250px] justify-between">
      <div className="items-center flex gap-3">
        <Check isChecked={true} />
        <div>
          <h2 className="text-base">My Todo</h2>
          <p className="text-grayStrong text-xs">23 minutes ago</p>
        </div>
      </div>
      <button className="p-2 hover:bg-[rgba(0,0,0,0.1)] rounded-md ml-1">
        <IconTrash color="red" width="20px" />
      </button>
    </li>
  );
};
