import { IconCheck } from '@tabler/icons-react';

type CheckProps = {
  isChecked: boolean;
};

export const Check = ({ isChecked }: CheckProps) => {
  return (
    <div className="flex items-center justify-center">
      <input type="checkbox" checked={isChecked} className="hidden" />
      <button
        className={`w-[20px] h-[20px] rounded-full ${isChecked ? 'bg-purple' : ''}`}
        style={{ border: `1px solid ${!isChecked ? '#7a7a7a' : '#6c80d1'}` }}
      >
        {isChecked ? <IconCheck width="16px" height="16px" stroke="5px" color="white" /> : null}
      </button>
    </div>
  );
};
