import { IconCheck, IconClock, IconList } from '@tabler/icons-react';
import { Button } from '../index';
import { useSettings } from '../../hooks';
import { TODO_STATUS_MAP } from '../../maps';

export const Filters = () => {
  const { filter, changeFilter } = useSettings();

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-white">
        <span className="font-bold">Filter by:</span> {filter ? TODO_STATUS_MAP[filter].text : 'All'}
      </p>
      <div className="flex gap-2">
        <Button icon={<IconList />} onClick={() => changeFilter(null)} isInactive={Boolean(filter)} />
        <Button
          icon={<IconClock />}
          isInactive={filter !== TODO_STATUS_MAP.pending.key}
          onClick={() => changeFilter(TODO_STATUS_MAP.pending.key as keyof typeof TODO_STATUS_MAP)}
        />
        <Button
          icon={<IconCheck />}
          isInactive={filter !== TODO_STATUS_MAP.done.key}
          onClick={() => changeFilter(TODO_STATUS_MAP.done.key as keyof typeof TODO_STATUS_MAP)}
        />
      </div>
    </div>
  );
};
