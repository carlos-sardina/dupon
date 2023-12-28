import { IconCheck, IconClock, IconList } from '@tabler/icons-react';
import { Button } from '../index';

const FilterButton = ({ icon, isActive = false }: { icon: React.ReactElement; isActive?: boolean }) => {
  return (
    <Button
      icon={icon}
      textColor="white"
      backgroundColor="purpleStrong"
      hoverBackgroundColor="purpleStronger"
      activeColor="#93b0e6"
      isActive={isActive}
    />
  );
};

export const Filters = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-white">
        <span className="font-bold">Filter by:</span> All
      </p>
      <div className="flex gap-2">
        <FilterButton icon={<IconList color="#93b0e6" />} isActive />
        <FilterButton icon={<IconClock />} />
        <FilterButton icon={<IconCheck />} />
      </div>
    </div>
  );
};
