import { IconCheck, IconClock, IconList } from '@tabler/icons-react';
import { Button } from '../index';

export const Filters = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-white">
        <span className="font-bold">Filter by:</span> All
      </p>
      <div className="flex gap-2">
        <Button icon={<IconList />} />
        <Button icon={<IconClock />} isInactive />
        <Button icon={<IconCheck />} isInactive />
      </div>
    </div>
  );
};
