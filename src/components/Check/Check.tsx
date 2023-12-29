import { IconCheck } from '@tabler/icons-react';

type CheckProps = {
  isChecked: boolean;
};

export const Check = ({ isChecked }: CheckProps) => {
  return (
    <div>
      <input type="checkbox" checked={isChecked} className="hidden" />
      <button
        className={`w-[25px] h-[25px] rounded-full flex items-center justify-center ${
          isChecked ? 'bg-purple hover:bg-purpleStrong' : 'hover:bg-grayLight'
        }`}
        style={{ border: `1px solid ${!isChecked ? '#7a7a7a' : '#6c80d1'}` }}
      >
        {isChecked ? <IconCheck width="16px" height="15px" stroke="5px" color="white" /> : null}
      </button>
    </div>
  );
};
